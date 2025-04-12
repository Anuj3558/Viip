import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { FiArrowLeft, FiShare2, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Fetch current blog
        const blogRes = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/blogs/slug/${slug}`);
        setBlog(blogRes?.data);
        
        // Fetch other blogs (using regular blogs endpoint)
        const otherBlogsRes = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/?page=1&limit=5`);
        
        // Filter out the current blog from the list
        if (otherBlogsRes?.data?.blogs) {
          const filteredBlogs = otherBlogsRes.data.blogs.filter(
            otherBlog => otherBlog._id !== blogRes.data._id
          ).slice(0, 4); // Limit to 4 other blogs
          
          setOtherBlogs(filteredBlogs);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-900 animate-spin"></div>
    </div>
  );
  
  if (!blog) return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Blog not found</h2>
      <Link to="/blogs" className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors">
        <FiArrowLeft className="mr-2" /> Back to all articles
      </Link>
    </div>
  );

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{blog.title} | VIIP - Virtual Intelligent Interface Platform</title>
        <meta name="description" content={blog.metaDescription || blog.excerpt} />
        <meta name="keywords" content={`VIIP, AI, virtual assistant, chatbot, automation, ${blog.tags?.join(', ') || ''}, intelligent interface, business automation, customer support, digital transformation, machine learning, natural language processing, productivity tools, SaaS, cloud computing, enterprise solutions, workflow automation, smart technology, AI integration, virtual agents`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription || blog.excerpt} />
        <meta property="og:image" content={blog.featuredImage || '/default-blog-image.jpg'} />
        <meta property="og:url" content={`https://viip.vercel.app/blog/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="mb-8">
        <Link to="/blogs" className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors">
          <FiArrowLeft className="mr-2" /> All Articles
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Blog Content */}
        <article className="lg:w-2/3">
          <header className="mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {blog.title}
            </motion.h1>
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4">
                {blog.author?.avatar && (
                  <img 
                    src={blog.author.avatar} 
                    alt={blog.author.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <span className="font-semibold text-blue-900">By {blog.author?.name || 'VIIP Team'}</span>
                  <span className="block text-sm text-gray-500">
                    {format(new Date(blog.publishedAt || blog.createdAt), 'MMMM d, yyyy')}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {blog.tags && blog.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-900 text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {blog.featuredImage && (
              <motion.div 
                className="my-8 overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <img 
                  src={blog.featuredImage} 
                  alt={blog.featuredImageAlt || blog.title} 
                  className="w-full h-auto max-h-96 object-cover"
                />
              </motion.div>
            )}
          </header>

          <motion.div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="relative">
              <button 
                onClick={toggleShare}
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors rounded-md"
              >
                <FiShare2 /> Share
              </button>
              
              {isShareOpen && (
                <motion.div 
                  className="absolute bottom-full left-0 mb-4 flex gap-2 bg-white p-3 shadow-md rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 font-medium transition-colors rounded"
                  >
                    <FiTwitter /> Twitter
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-medium transition-colors rounded"
                  >
                    <FiLinkedin /> LinkedIn
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 font-medium transition-colors rounded"
                  >
                    <FiFacebook /> Facebook
                  </a>
                </motion.div>
              )}
            </div>
          </footer>
        </article>

        {/* Sidebar with Other Blogs */}
        <aside className="lg:w-1/3">
          <div className="sticky top-8">
            <div className=" p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                Other Blogs
              </h2>
              
              {otherBlogs && otherBlogs.length > 0 ? (
                <div className="space-y-6">
                  {otherBlogs.map(otherBlog => (
                    <Link 
                      key={otherBlog._id} 
                      to={`/blog/${otherBlog.slug}`}
                      className="block group border-2 border-gray-300 p-3"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 h-16  overflow-hidden rounded">
                          {otherBlog.featuredImage ? (
                            <img 
                              src={otherBlog.featuredImage} 
                              alt={otherBlog.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                            />
                          ) : (
                            <div className="w-full h-full bg-blue-900 flex items-center justify-center">
                              <span className="text-white text-xs font-semibold">VIIP</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                            {otherBlog.title}
                          </h3>
                          <span className="text-xs text-gray-500 mt-1 block">
                            {format(new Date(otherBlog.publishedAt || otherBlog.createdAt), 'MMM d, yyyy')}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                  
                  <div className="pt-4 text-center">
                    <Link 
                      to="/blogs" 
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors"
                    >
                      View all blogs
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No other articles found</p>
                </div>
              )}
              
              {/* Newsletter Subscription */}
             
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

export default BlogPage;