import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestimonialMarquee = () => {
  const marqueeRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/testimonials` );
        setTestimonials(response.data);
      } catch (error) {
        toast.error('Failed to load testimonials');
        console.error('Error fetching testimonials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Clone the testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  // Set up the infinite scroll animation
  useEffect(() => {
    if (testimonials.length === 0) return;

    const marqueeAnimation = () => {
      if (marqueeRef.current) {
        if (marqueeRef.current.scrollLeft >= marqueeRef.current.scrollWidth / 2) {
          marqueeRef.current.scrollLeft = 0;
        } else {
          marqueeRef.current.scrollLeft += 1;
        }
      }
    };
    
    const animationInterval = setInterval(marqueeAnimation, 20);
    
    return () => clearInterval(animationInterval);
  }, [testimonials]);

  if (isLoading) {
    return (
      <section id="Testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              WHAT OUR CLIENTS SAY
            </h2>
            <div className="flex justify-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section id="Testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-xl text-gray-600 mt-4">No testimonials available yet</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="Testimonials" className="py-20 overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-xl text-gray-600 mt-4">Real Results from Real Businesses</p>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-4"></div>
        </div>
        
        {/* Testimonial Marquee Container */}
        <div 
          ref={marqueeRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
        >
          <div className="inline-flex gap-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial._id || testimonial.id}-${index}`} 
                className="inline-block w-96 py-6 whitespace-normal align-top"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="flex flex-col items-center">
                    {/* Larger Image */}
                    <div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-blue-100 shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/placeholder-avatar.jpg';
                        }}
                      />
                    </div>
                    
                    {/* Quote */}
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-blue-200 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-700 text-center italic">{testimonial.quote}</p>
                    </div>
                    
                    {/* Author Info */}
                    <h3 className="text-xl font-semibold text-blue-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-blue-700 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;