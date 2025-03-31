import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import './Blog.css';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const [blogRes, relatedRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/blogs/${slug}`),
          axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/blogs/related/${slug}`)
        ]);
        setBlog(blogRes.data);
        setRelatedBlogs(relatedRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (!blog) return <div className="not-found">Blog not found</div>;

  return (
    <div className="blog-container">
      <Helmet>
        <title>{blog.title} | VIIP - Virtual Intelligent Interface Platform</title>
        <meta name="description" content={blog.metaDescription || blog.excerpt} />
        <meta name="keywords" content={`VIIP, AI, virtual assistant, chatbot, automation, ${blog.tags.join(', ')}, intelligent interface, business automation, customer support, digital transformation, machine learning, natural language processing, productivity tools, SaaS, cloud computing, enterprise solutions, workflow automation, smart technology, AI integration, virtual agents`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription || blog.excerpt} />
        <meta property="og:image" content={blog.featuredImage || '/default-blog-image.jpg'} />
        <meta property="og:url" content={`https://viip.vercel.app/blog/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <article className="blog-post">
        <header className="blog-header">
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-meta">
            <span className="blog-author">By {blog.author.name}</span>
            <span className="blog-date">{format(new Date(blog.publishedAt), 'MMMM d, yyyy')}</span>
            <div className="blog-tags">
              {blog.tags.map(tag => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
          </div>
          {blog.featuredImage && (
            <img 
              src={blog.featuredImage} 
              alt={blog.featuredImageAlt || blog.title} 
              className="blog-featured-image"
            />
          )}
        </header>

        <div 
          className="blog-content" 
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />

        <footer className="blog-footer">
          <div className="blog-share">
            <span>Share this post:</span>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </footer>
      </article>

      {relatedBlogs.length > 0 && (
        <section className="related-blogs">
          <h2>Related Articles</h2>
          <div className="related-blogs-grid">
            {relatedBlogs.map(related => (
              <div key={related._id} className="related-blog-card">
                <Link to={`/blog/${related.slug}`}>
                  {related.featuredImage && (
                    <img 
                      src={related.featuredImage} 
                      alt={related.featuredImageAlt || related.title}
                      className="related-blog-image"
                    />
                  )}
                  <h3>{related.title}</h3>
                  <p className="related-blog-excerpt">{related.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPage;