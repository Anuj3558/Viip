import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { format, parseISO, isPast } from 'date-fns';
import { FiArrowLeft, FiShare2, FiTwitter, FiLinkedin, FiFacebook, FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const EventPage = () => {
  const [event, setEvent] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const [eventRes, relatedRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/events/${slug}`),
        ]);
        setEvent(eventRes.data);
        setRelatedEvents(relatedRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-900 animate-spin"></div>
    </div>
  );
  
  if (!event) return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Event not found</h2>
      <Link to="/events" className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors">
        <FiArrowLeft className="mr-2" /> Back to all events
      </Link>
    </div>
  );

  const isPastEvent = isPast(parseISO(event.endDate || event.startDate));

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{event.title} | VIIP - Virtual Intelligent Interface Platform</title>
        <meta name="description" content={event.metaDescription || event.excerpt} />
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content={event.metaDescription || event.excerpt} />
        <meta property="og:image" content={event.featuredImage || '/default-event-image.jpg'} />
        <meta property="og:url" content={`https://viip.vercel.app/events/${slug}`} />
      </Helmet>

      <div className="mb-8">
        <Link to="/events" className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors">
          <FiArrowLeft className="mr-2" /> All Events
        </Link>
      </div>

      <article className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center mb-4">
            <span className={`px-3 py-1 text-sm font-semibold ${
              isPastEvent 
                ? 'bg-gray-100 text-gray-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {isPastEvent ? 'Past Event' : 'Upcoming Event'}
            </span>
            <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-900 text-sm font-semibold">
              {event.eventType}
            </span>
          </div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {event.title}
          </motion.h1>

          {event.featuredImage && (
            <motion.div 
              className="my-8 overflow-hidden shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src={event.featuredImage} 
                alt={event.featuredImageAlt || event.title} 
                className="w-full h-auto max-h-96 object-cover"
              />
            </motion.div>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6">
            <div className="flex items-center mb-4">
              <FiCalendar className="text-blue-900 mr-3" size={20} />
              <div>
                <h3 className="font-semibold text-gray-700">Date & Time</h3>
                <p className="text-gray-600">
                  {format(parseISO(event.startDate), 'MMMM d, yyyy')}
                  {event.endDate && (
                    <> - {format(parseISO(event.endDate), 'MMMM d, yyyy')}</>
                  )}
                  <br />
                  {event.startTime && (
                    <>{event.startTime} {event.endTime && `to ${event.endTime}`}</>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6">
            <div className="flex items-center mb-4">
              <FiMapPin className="text-blue-900 mr-3" size={20} />
              <div>
                <h3 className="font-semibold text-gray-700">Location</h3>
                <p className="text-gray-600">
                  {event.locationType === 'online' ? (
                    <>Online Event</>
                  ) : (
                    <>
                      {event.location}<br />
                      {event.address}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {event.registrationLink && !isPastEvent && (
            <div className="bg-gray-50 p-6">
              <div className="flex items-center mb-4">
                <FiClock className="text-blue-900 mr-3" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-700">Register</h3>
                  <a 
                    href={event.registrationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-6 py-2 bg-blue-900 text-white hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <motion.div 
          className="prose prose-lg max-w-none text-gray-700 mb-12"
          dangerouslySetInnerHTML={{ __html: event.content }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />

        {event.speakers && event.speakers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {event.speakers.map((speaker, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  className="bg-white p-6 shadow-md"
                >
                  {speaker.avatar && (
                    <img 
                      src={speaker.avatar} 
                      alt={speaker.name} 
                      className="w-20 h-20 object-cover mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-gray-800">{speaker.name}</h3>
                  <p className="text-blue-900 mb-2">{speaker.title}</p>
                  <p className="text-gray-600">{speaker.bio}</p>
                </motion.div>
              ))}
            </div>
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(event.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 font-medium transition-colors"
                >
                  <FiTwitter /> Twitter
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(event.title)}`} 
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

      {relatedEvents.length > 0 && (
        <section className="mt-24">
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Related Events
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedEvents.map((event, index) => (
              <motion.div 
                key={event._id} 
                className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/events/${event.slug}`} className="block h-full">
                  {event.featuredImage && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.featuredImage} 
                        alt={event.featuredImageAlt || event.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FiCalendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        {format(parseISO(event.startDate), 'MMM d, yyyy')}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FiMapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        {event.locationType === 'online' ? 'Online' : event.location}
                      </span>
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

export default EventPage;