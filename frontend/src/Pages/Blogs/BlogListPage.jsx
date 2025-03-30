import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

// Blog List Component
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/?page=${currentPage}&limit=6`);
        setBlogs(res.data.blogs);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        setError('Failed to load blogs. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const handlePageChange = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest insights, news, and knowledge resources
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">No blog posts available yet. Check back soon!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link 
                  to={`/blog/${blog.slug}`} 
                  key={blog._id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
                    {blog.featuredImage ? (
                      <img
                        src={blog.featuredImage}
                        alt={blog.featuredImageAlt || blog.title}
                        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-56 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-blue-500 text-lg font-medium">VIIP Blog</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {blog.tags && blog.tags.length > 0 ? blog.tags[0] : 'General'}
                      </span>
                      <span className="text-xs text-gray-500 ml-3">
                        {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {blog.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="inline-flex rounded-md shadow">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-4 py-2 text-sm font-medium border ${
                        currentPage === index + 1
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default BlogList;