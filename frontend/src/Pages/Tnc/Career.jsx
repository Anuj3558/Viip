import React from 'react';
import { Briefcase, TrendingUp, Calendar, Users, ArrowRight, Award, Globe } from 'lucide-react';

export default function Careers() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 -mb-48 -ml-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Investor Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full mb-3">
            Exclusive Opportunity
          </div>
          <p className="text-blue-600 font-medium mb-2">Opportunity to be a 
          </p>
          <h1 className="text-5xl font-bold mb-6 text-blue-900">Partner</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Join our visionary team in shaping the future of virtual team collaboration.
            Become part of our growth story with attractive investment opportunities.
          </p>
          
          <div className="flex justify-center">
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center group">
            Apply as a Partner
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 text-center transform transition-all hover:shadow-md hover:-translate-y-1">
            <div className="text-blue-600 font-bold text-3xl mb-2">150+</div>
            <p className="text-gray-600">Global Team Members</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 text-center transform transition-all hover:shadow-md hover:-translate-y-1">
            <div className="text-blue-600 font-bold text-3xl mb-2">42%</div>
            <p className="text-gray-600">Annual Growth Rate</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 text-center transform transition-all hover:shadow-md hover:-translate-y-1">
            <div className="text-blue-600 font-bold text-3xl mb-2">20+</div>
            <p className="text-gray-600">Countries Represented</p>
          </div>
        </div>

        {/* Career Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full mb-3">
            Join Our Team
          </div>
          <p className="text-blue-600 font-medium mb-2">Opportunities for you</p>
          <h2 className="text-5xl font-bold mb-8 text-blue-900">Career</h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Be part of a dynamic team transforming how global teams collaborate.
            Find your perfect role with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="group cursor-pointer">
              <div className="bg-white hover:bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center h-full">
                <div className="bg-blue-100 text-blue-900 p-3 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <Briefcase size={28} />
                </div>
                <p className="font-medium text-center text-lg text-blue-900">Jobs at VIIP</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={20} className="text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white hover:bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center h-full">
                <div className="bg-blue-100 text-blue-900 p-3 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <TrendingUp size={28} />
                </div>
                <p className="font-medium text-center text-lg text-blue-900">Jobs at startup</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={20} className="text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-blue-900 hover:bg-blue-800 rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center h-full">
                <div className="bg-blue-800 text-white p-3 rounded-full mb-6">
                  <Calendar size={28} />
                </div>
                <p className="font-medium text-center text-lg text-white">Apply for internship</p>
                <div className="mt-4">
                  <ArrowRight size={20} className="text-blue-300" />
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white hover:bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center h-full">
                <div className="bg-blue-100 text-blue-900 p-3 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <Users size={28} />
                </div>
                <p className="font-medium text-center text-lg text-blue-900">Join as volunteer</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={20} className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Banner */}

      </div>
    </div>
  );
}