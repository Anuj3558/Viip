import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Initialize testimonial slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove('hidden');
          slide.classList.add('animate__fadeIn');
        } else {
          slide.classList.add('hidden');
          slide.classList.remove('animate__fadeIn');
        }
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    };

    // Set up event listeners for navigation buttons
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slides
    const autoSlideInterval = setInterval(nextSlide, 5000);

    // Show first slide initially
    showSlide(0);

    return () => {
      clearInterval(autoSlideInterval);
      if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
      if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
    };
  }, []);

  return (
    <section id="Testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-4"></div>
        </div>

        <div className="testimonial-slider relative">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* Testimonial 1 */}
              <div className="testimonial-slide swiper-slide">
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg mx-4 animate__animated animate__fadeIn">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-blue-900">John Anderson</h3>
                      <p className="text-gray-600">Tech Startup CEO</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"Vastav Intellect IP Solutions guided us through our company registration process. Their consulting services are top notch."</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-slide swiper-slide hidden">
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg mx-4 animate__animated animate__fadeIn">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-blue-900">Sarah Williams</h3>
                      <p className="text-gray-600">E-Commerce Entrepreneur</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"Their expert consulting helped streamline our licensing and registration process. Thank you for the expert guidance!"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
               {/* Testimonial 3 */}
               <div className="testimonial-slide swiper-slide hidden">
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg mx-4 animate__animated animate__fadeIn">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-blue-900">Ravi Patel</h3>
                      <p className="text-gray-600">Finance Director</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"Their legal consultation services helped us optimize our business processes. Highly recommend Vastav Intellect IP Solutions."</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation buttons */}
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
