import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AchievementsList = () => {
  const [achievements, setAchievements] = useState([]);
  const [partnerships, setPartnerships] = useState([]);
  const [visiblePartnerships, setVisiblePartnerships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [partnershipsLoading, setPartnershipsLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showAllPartnerships, setShowAllPartnerships] = useState(false);
  const ITEMS_PER_PAGE = 6;
  const DEFAULT_PARTNERSHIPS = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [achievementsRes, partnershipsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/achievements?page=1&limit=${ITEMS_PER_PAGE}`),
          axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/partnerships?limit=100`) // Get all partnerships
        ]);
        
        setAchievements(achievementsRes.data.achievements);
        setHasMore(achievementsRes.data.totalPages > 1);
        
        // Store all partnerships but only display the first 3
        setPartnerships(partnershipsRes.data);
        setVisiblePartnerships(partnershipsRes.data.slice(0, DEFAULT_PARTNERSHIPS));
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
        setPartnershipsLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMoreAchievements = async () => {
    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/achievements?page=${nextPage}&limit=${ITEMS_PER_PAGE}`
      );
      
      if (response.data.achievements.length > 0) {
        setAchievements(prevAchievements => [...prevAchievements, ...response.data.achievements]);
        setPage(nextPage);
        setHasMore(nextPage < response.data.totalPages);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setError('Failed to load more achievements. Please try again.');
      console.error(err);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleViewAllPartnerships = () => {
    setShowAllPartnerships(true);
    setVisiblePartnerships(partnerships);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-900 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto my-12 p-6 bg-red-50 border-l-4 border-red-500 shadow-md">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-700 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Achievements Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Our Achievements</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Celebrating milestones and successes that demonstrate our commitment to excellence.
          </p>
        </div>

        {achievements.length === 0 ? (
          <div className="max-w-4xl mx-auto text-center py-16 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Achievements Yet</h2>
            <p className="text-lg text-gray-500">We're working hard to achieve great things. Check back soon!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={achievement._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index % ITEMS_PER_PAGE * 0.1 }}
                  className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="overflow-hidden">
                    {achievement.featuredImage ? (
                      <img
                        src={achievement.featuredImage}
                        alt={achievement.featuredImageAlt || achievement.title}
                        className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-64 bg-gradient-to-r from-blue-900 to-indigo-600 flex items-center justify-center">
                        <span className="text-white text-xl font-semibold tracking-wide">VIIP Achievement</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-blue-900 bg-blue-50 px-3 py-1">
                        {achievement.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(achievement.date).toLocaleDateString('en-US', {
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-900 transition-colors duration-300 line-clamp-2">
                      {achievement.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {achievement.excerpt}
                    </p>
                    
                    <Link 
                      to={`/achievements/${achievement.slug}`}
                      className="inline-flex items-center pt-2 border-t border-gray-100 text-blue-900 font-semibold"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {hasMore && (
              <div className="flex justify-center mt-16">
                <button
                  onClick={loadMoreAchievements}
                  disabled={loadingMore}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loadingMore ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Loading...
                    </>
                  ) : (
                    <>
                      See More Achievements
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}

        {/* Partnerships Section */}
        <div className="mt-32 mb-20">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Our Partnerships</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Collaborations that help us deliver exceptional results and drive innovation.
            </p>
          </div>

          {partnershipsLoading ? (
            <div className="flex justify-center py-16">
              <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-900 animate-spin"></div>
            </div>
          ) : partnerships.length === 0 ? (
            <div className="max-w-4xl mx-auto text-center py-16 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Partnerships Yet</h3>
              <p className="text-lg text-gray-500">We're actively building valuable partnerships.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {visiblePartnerships.map((partner, index) => (
                  <motion.div
                    key={partner._id || index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <Link to={partner?.link} className="block">
                      <div className="p-6 flex flex-col items-center">
                        {partner.image ? (
                          <img
                            src={partner.image}
                            alt={partner.name}
                            className="h-24 object-contain mb-4"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/placeholder-logo.png';
                            }}
                          />
                        ) : (
                          <div className="h-24 w-full flex items-center justify-center mb-4 bg-gray-100 rounded">
                            <span className="text-gray-500 font-medium">{partner.name}</span>
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{partner.name}</h3>
                        
                        <p className="text-gray-600 text-center line-clamp-3">
                          {partner.description || "A strategic partnership focused on driving innovation and excellence in our industry."}
                        </p>
                        
                        <div className="mt-4 text-blue-900 font-semibold flex items-center">
                          View Partnership
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {partnerships.length > DEFAULT_PARTNERSHIPS && !showAllPartnerships && (
                <div className="text-center mt-12">
                  <button
                    onClick={handleViewAllPartnerships}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                  >
                    View All Partnerships
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementsList;