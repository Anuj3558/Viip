import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { FiArrowLeft, FiShare2, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AchievementPage = () => {
  const [achievement, setAchievement] = useState(null);
  const [relatedAchievements, setRelatedAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchAchievement = async () => {
      try {
        const [achievementRes, relatedRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/achievements/${slug}`),
          axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/achievements/related/${slug}`)
        ]);
        setAchievement(achievementRes.data);
        setRelatedAchievements(relatedRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievement();
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
      <Link to="/achievements" className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors">
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
        <Link to="/achievements" className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors">
          <FiArrowLeft className="mr-2" /> All Achievements
        </Link>
      </div>

      <article className="max-w-3xl mx-auto">
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

      {relatedAchievements.length > 0 && (
        <section className="mt-24">
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            More Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedAchievements.map((achievement, index) => (
              <motion.div 
                key={achievement._id} 
                className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/achievements/${achievement.slug}`} className="block h-full">
                  {achievement.featuredImage && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={achievement.featuredImage} 
                        alt={achievement.featuredImageAlt || achievement.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{achievement.excerpt}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{format(new Date(achievement.date), 'MMM d, yyyy')}</span>
                      <span>{achievement.category}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default AchievementPage;