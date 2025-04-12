import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Calendar, MapPin, X, ArrowRight } from "lucide-react";

// EventCard component that can be used independently
const EventCard = ({ event, onClose }) => {
  const eventDate = new Date(event.startDate);
  const eventTimeStart = event.startTime || "00:00";
  const eventTimeEnd = event.endTime;
  
  // Calculate days remaining
  const today = new Date();
  const daysRemaining = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
  const isUrgent = daysRemaining <= 7;

  // Format event type for tag
  const eventTypeTag = event.eventType || "Event";

  return (
    <div className="bg-white top-0 relative justify-self-start justify-center mx-auto rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-700 p-1.5 rounded-full transition-colors duration-200"
      >
        <X className="w-5 h-5" />
      </button>
      
      {/* Event Type Tag */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium">
          {eventTypeTag}
        </div>
      </div>
      
      <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
        {event.featuredImage && (
          <div className="w-full h-48 relative">
            <img
              src={event.featuredImage}
              alt={event.featuredImageAlt || event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}
        
        <div className="p-6">
          {/* Event details */}
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-3 text-gray-800">
              {event.title}
            </h2>
            
            <div className="flex flex-col space-y-2 mb-3">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-blue-900" />
                <p className="text-sm">
                  {eventDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                  {eventTimeStart && ` • ${eventTimeStart}`}
                  {eventTimeEnd && ` - ${eventTimeEnd}`}
                </p>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-blue-900" />
                <p className="text-sm">
                  {event.locationType === "virtual" ? "Virtual Event" : event.location}
                  {event.address && ` • ${event.address}`}
                </p>
              </div>
            </div>
          </div>
          
          {/* Limited spots notification */}
          {isUrgent && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-blue-700">
                <span className="font-semibold">Only {daysRemaining} days left!</span> Limited spots available.
              </p>
            </div>
          )}
          
          <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-2">
            {event.excerpt || event.content?.substring(0, 120)}...
          </p>
          
          <div className="flex flex-col space-y-3">
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg 
                transition duration-300 font-medium text-sm flex justify-center items-center"
            >
              Register Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            
            <a
              href={`/events/${event.slug}`}
              className="text-gray-700 hover:text-blue-900 border border-gray-200 hover:border-blue-900/20 transition duration-300 
                px-4 py-2 rounded-lg text-sm text-center font-medium"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main overlay component that handles fetching data and visibility
const TrendingEventOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [topEvent, setTopEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState("animate-fade-in");
  const COOKIE_NAME = "hasSeenTrendingEventOverlay";

  useEffect(() => {
    const fetchTopEvent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/top-future-event`);
        setTopEvent(response.data);
        
        // Check cookie after we know we have an event
        const hasSeenOverlay = Cookies.get(COOKIE_NAME);
        if (!hasSeenOverlay) {
          // Make immediately visible
          setIsVisible(true);
          
          // Set cookie with 3-hour expiration
          const threeHoursFromNow = new Date(
            new Date().getTime() + 3 * 60 * 60 * 1000
          );
          Cookies.set(COOKIE_NAME, "true", {
            expires: threeHoursFromNow,
            path: "/",
            sameSite: "strict",
          });
        }
      } catch (error) {
        console.error("Error fetching top event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopEvent();
  }, []);

  const closeOverlay = () => {
    setAnimation("animate-fade-out");
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible || loading || !topEvent) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-start mx-auto justify-center pt-[10vh] backdrop-blur-sm">
      <div className={animation}>
        <EventCard event={topEvent} onClose={closeOverlay} />
      </div>
    </div>
  );
};

// You can export both components if needed
export { EventCard };
export default TrendingEventOverlay;