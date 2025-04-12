import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { FiArrowLeft, FiShare2, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AchievementPage = () => {
  const [achievement, setAchievement] = useState(null);
  const [otherAchievements, setOtherAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        // Get current achievement by slug
        const achievementRes = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/achievements/slug/${slug}`);
        setAchievement(achievementRes.data);
        
        // Get all achievements for the sidebar
        const allAchievementsRes = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/achievements?limit=10`);
        const allAchievements = allAchievementsRes.data.achievements || [];
        
        // Filter out the current achievement and shuffle the rest
        const filteredAchievements = allAchievements
          .filter(item => item._id !== achievementRes.data._id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 5); // Take only 5 achievements for the sidebar
          
        setOtherAchievements(filteredAchievements);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, [slug]);

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-900 animate-spin"></div>
    </div>
  );
  
  if (!achievement) return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Achievement not found</h2>
      <Link to="/achivement" className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors">
        <FiArrowLeft className="mr-2" /> Back to all achievements
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
        <title>{achievement.title} | VIIP - Virtual Intelligent Interface Platform</title>
        <meta name="description" content={achievement.metaDescription || achievement.excerpt} />
        <meta property="og:title" content={achievement.title} />
        <meta property="og:description" content={achievement.metaDescription || achievement.excerpt} />
        <meta property="og:image" content={achievement.featuredImage || '/default-achievement-image.jpg'} />
        <meta property="og:url" content={`https://viip.vercel.app/achievements/${slug}`} />
      </Helmet>

      <div className="mb-8">
        <Link to="/achivement" className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors">
          <FiArrowLeft className="mr-2" /> All Achievements
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content column */}
        <div className="lg:w-2/3">
          <article>
            <header className="mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {achievement.title}
              </motion.h1>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="block text-sm text-gray-500">
                      {format(new Date(achievement.date), 'MMMM d, yyyy')}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-900 text-xs font-medium">
                    {achievement.category}
                  </span>
                </div>
              </div>

              {achievement.featuredImage && (
                <motion.div 
                  className="my-8 overflow-hidden shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <img 
                    src={achievement.featuredImage} 
                    alt={achievement.featuredImageAlt || achievement.title} 
                    className="w-full h-auto max-h-96 object-cover"
                  />
                </motion.div>
              )}
            </header>

            <motion.div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: achievement.content }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />

            {achievement.stats && achievement.stats.length > 0 && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievement.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    className="bg-blue-50 p-6 text-center"
                  >
                    <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                    <div className="text-gray-700">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}

            <footer className="mt-16 pt-8 border-t border-gray-200">
              <div className="relative">
                <button 
                  onClick={toggleShare}
                  className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors"
                >
                  <FiShare2 /> Share
                </button>
                
                {isShareOpen && (
                  <motion.div 
                    className="absolute bottom-full left-0 mb-4 flex gap-2 bg-white p-3 shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(achievement.title)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 font-medium transition-colors"
                    >
                      <FiTwitter /> Twitter
                    </a>
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(achievement.title)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-medium transition-colors"
                    >
                      <FiLinkedin /> LinkedIn
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 font-medium transition-colors"
                    >
                      <FiFacebook /> Facebook
                    </a>
                  </motion.div>
                )}
              </div>
            </footer>
          </article>
        </div>

        {/* Sidebar with other achievements */}
        <aside className="lg:w-1/3">
          <div className="sticky top-8">
            <div className="p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                Other Achievements
              </h2>
              
              {otherAchievements && otherAchievements.length > 0 ? (
                <div className="space-y-6">
                  {otherAchievements.map(otherAchievement => (
                    <Link 
                      key={otherAchievement._id} 
                      to={`/achievements/${otherAchievement.slug}`}
                      className="block group border-2 border-gray-300 p-3"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 h-16 overflow-hidden rounded">
                          {otherAchievement.featuredImage ? (
                            <img 
                              src={otherAchievement.featuredImage} 
                              alt={otherAchievement.title}
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
                            {otherAchievement.title}
                          </h3>
                          <span className="text-xs text-gray-500 mt-1 block">
                            {format(new Date(otherAchievement.date), 'MMM d, yyyy')}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                  
                  <div className="pt-4 text-center">
                    <Link 
                      to="/achivement" 
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors"
                    >
                      View all achievements
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No other achievements found</p>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

export default AchievementPage;