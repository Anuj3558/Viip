import React from 'react';
import { Briefcase, TrendingUp, Calendar, Users, ArrowRight, Award, Globe, Mail, MapPin } from 'lucide-react';

export default function Careers() {
  const positions = [
    "Patent Analyst",
    "Telecaller",
    "HR Executive & Intern",
    "Prompt Writer",
    "Content Writer",
    "Sales Executive",
    "Marketing Executive & Intern",
    "CSR Specialist",
    "Researcher (Multiple Domains)",
    "Business Development",
    "Trademark Analyst",
    "Internship",
    "Graphic Designer",
    "Video Editor",
    "Legal Drafter",
    "Patent Agent",
    "Trademark Attorney",
    "Digital Marketing",
    "Event Coordination & Outreach",
    "Website Management & SEO",
    "HR & Talent Acquisition"
  ];

  const applicationLink = "https://forms.gle/DMwWJTK368XjChBg7";

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 -mb-48 -ml-48"></div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team at VIIPS</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Be part of a purpose-driven organization making meaningful impact in intellectual property and beyond
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Company Introduction */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full mb-3">
            Career Opportunities
          </div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Vastav Intellect IP Solutions LLP (VIIPS)</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
 We offer diverse opportunities for those seeking to contribute meaningfully across roles such as Intern, Volunteer, Part-time, Full-time, Project-based, Campus Ambassador, and Freelancer/Consultant. Whether you're a student, graduate, or experienced professional, you can explore positions in areas like intellectual property rights, legal advisory, research, business development, content creation, and more.
          </p>
        
        </div>

        {/* Work Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 text-center transform transition-all hover:shadow-md hover:-translate-y-1">
            <div className="bg-blue-100 text-blue-900 p-3 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
              <MapPin size={28} />
            </div>
            <div className="text-blue-900 font-bold text-xl mb-2">On-Site</div>
            <p className="text-gray-600">Delhi/NCR Office</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 text-center transform transition-all hover:shadow-md hover:-translate-y-1">
            <div className="bg-blue-100 text-blue-900 p-3 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
              <Globe size={28} />
            </div>
            <div className="text-blue-900 font-bold text-xl mb-2">Remote</div>
            <p className="text-gray-600">Work from anywhere</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 text-center transform transition-all hover:shadow-md hover:-translate-y-1">
            <div className="bg-blue-100 text-blue-900 p-3 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
              <Award size={28} />
            </div>
            <div className="text-blue-900 font-bold text-xl mb-2">Hybrid</div>
            <p className="text-gray-600">Flexible arrangements</p>
          </div>
        </div>
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full mb-3">
          Opportunity to be a 
          </div>
          <p className="text-blue-600 font-medium mb-2">
          </p>
          <h1 className="text-5xl font-bold mb-6 text-blue-900">Partner</h1>
          <p className="text-gray-600 mb-8 text-lg">
            JJoin our journey as a strategic B2B partner and explore compelling opportunities for mutual growth and innovation.
          </p>
          
          <div className="flex justify-center">
            <a href="https://forms.gle/KWxzusrgQozLEG27A"><button className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center group">
            Apply as a Partner
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button></a>
          </div>
        </div>
        {/* Current Openings */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full mb-3">
              Open Positions
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Current Openings</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We're hiring across multiple departments. Find your perfect role with us and apply today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <div key={index} className="group">
                <div className="bg-white hover:bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-900 p-2 rounded-full mr-4 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                      <Briefcase size={20} />
                    </div>
                    <p className="font-medium text-blue-900">{position}</p>
                  </div>
                  <a 
                    href={applicationLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 group-hover:text-blue-800"
                  >
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href={applicationLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center group"
            >
              Apply Now
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Career Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full mb-3">
              Engagement Models
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Join Us As</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <a href={applicationLink}>
            <div className="group cursor-pointer">
              <div className="bg-white hover:bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center h-full">
                <div className="bg-blue-100 text-blue-900 p-3 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <Briefcase size={28} />
                </div>
                <p className="font-medium text-center text-lg text-blue-900">Full-time Employee</p>
              </div>
            </div>
            </a>
            <a href={applicationLink}>
            <div className="group cursor-pointer">
              <div className="bg-white hover:bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center h-full">
                <div className="bg-blue-100 text-blue-900 p-3 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <TrendingUp size={28} />
                </div>
                <p className="font-medium text-center text-lg text-blue-900">Freelancer/Consultant</p>
              </div>
            </div>
            </a>
            <a href={applicationLink}>
            <div className="bg-blue-900 hover:bg-blue-800 rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center h-full group cursor-pointer">
              <div className="bg-blue-800 text-white p-3 rounded-full mb-6">
                <Calendar size={28} />
              </div>
              <p className="font-medium text-center text-lg text-white">Intern</p>
            </div>
            </a>
            <a href={applicationLink}>
            <div className="group cursor-pointer">
              <div className="bg-white hover:bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center h-full">
                <div className="bg-blue-100 text-blue-900 p-3 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <Users size={28} />
                </div>
                <p className="font-medium text-center text-lg text-blue-900">Part Time</p>
              </div>
            </div>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-sm max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Questions? Contact Us</h3>
          <p className="text-gray-600 mb-6">
            For any questions or assistance with your application, feel free to reach out to our HR team.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:hr@vastavintellect.com" 
              className="inline-flex items-center bg-blue-100 hover:bg-blue-200 text-blue-900 px-6 py-3 rounded-lg transition-all"
            >
              <Mail size={18} className="mr-2" />
              hr@vastavintellect.com
            </a>
            <a 
              href="mailto:career@vastavintellect.com" 
              className="inline-flex items-center bg-blue-100 hover:bg-blue-200 text-blue-900 px-6 py-3 rounded-lg transition-all"
            >
              <Mail size={18} className="mr-2" />
              career@vastavintellect.com
            </a>
          </div>
        </div>

        {/* Final CTA */}
        
      </div>
    </div>
  );
}