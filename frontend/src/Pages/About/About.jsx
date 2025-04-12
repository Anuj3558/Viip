import React from "react";
import { Helmet } from "react-helmet";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>About Vastav Intellect | Premier IP & Business Solutions Partner</title>
        <meta
          name="description"
          content="Vastav Intellect transforms innovations into assets with premier intellectual property services, corporate consulting, and strategic business solutions for startups and enterprises."
        />
        <meta
          name="keywords"
          content="Intellectual Property Experts, Strategic IP Solutions, Patent Filing, Trademark Registration, Copyright Protection, Business Setup, IP Law Firm, Market Research, IP Monetization, Technology Innovation, Legal Advisory, Patent Prosecution, Trademark Enforcement, Business Consultation, Startup Support, IP Management, Delhi Law Firm, International IP Services"
        />
        <meta name="author" content="Vastav Intellect IP Solutions LLP" />
        <meta property="og:title" content="About Vastav Intellect | Premier IP & Business Solutions Partner" />
        <meta property="og:description" content="Transform your innovations into valuable assets with our comprehensive intellectual property and business advisory services." />
        <meta property="og:url" content="https://www.vastavintellect.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Transforming Ideas Into Assets</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your premier partner in intellectual property and strategic business solutions since 2019
          </p>
        </div>

        {/* About Content Section */}
        <div className="bg-white p-10 rounded-xl shadow-lg mb-12">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Our Story: From Patents to Comprehensive Business Solutions
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Founded in 2019 as "AV IP Solution," Vastav Intellect has evolved into a comprehensive legal and business advisory powerhouse. What began as a specialized patent service in Delhi has transformed into a holistic IP and business solutions firm serving clients across India and globally.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              With over 7 years of domain expertise and a proven track record of 400+ successful IP filings, we've become the trusted partner for startups, corporations, academic institutions, and government agencies seeking to protect their innovations and accelerate business growth.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Beyond Traditional IP Services
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Unlike conventional law firms, Vastav Intellect delivers end-to-end solutions that bridge the gap between innovation and commercialization. Our expertise extends across:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Intellectual Property Excellence</h3>
                <p className="text-gray-700">Strategic filing, prosecution, and monetization of Patents, Trademarks, Copyrights, and Industrial Designs with industry-specific insights.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Startup & Corporate Services</h3>
                <p className="text-gray-700">Business formation, DPIIT recognition, funding documentation, pitch decks, due diligence, and comprehensive startup mentorship.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Regulatory Navigation</h3>
                <p className="text-gray-700">Seamless compliance solutions including GST, MSME, FSSAI, Import/Export licensing, and international regulatory frameworks.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Global Business Expansion</h3>
                <p className="text-gray-700">Cross-border filing management, international business setup, and strategic alliance formation across key markets.</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              The Vastav Intellect Advantage
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              What truly sets us apart is our client-first approach combined with deep industry knowledge and technological integration:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span className="text-gray-700"><span className="font-semibold">Tailored Solutions:</span> We craft customized strategies aligned with your specific business objectives and budget constraints.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span className="text-gray-700"><span className="font-semibold">Industry Expertise:</span> Our team brings specialized knowledge across technology, healthcare, manufacturing, and creative sectors.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span className="text-gray-700"><span className="font-semibold">Strategic Partnership:</span> We function as your extended team, offering ongoing guidance beyond transactional services.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span className="text-gray-700"><span className="font-semibold">Global Network:</span> Access to international associates across the US, Europe, Middle East, and Asia-Pacific.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span className="text-gray-700"><span className="font-semibold">Innovation Ecosystem:</span> Active collaboration with universities, incubators, and innovation councils.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Our Vision & Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-white text-lg">
                  To become India's most dependable, inclusive, and forward-thinking legal-business advisory firm, recognized for transforming ideas into thriving businesses and being the legal backbone for tomorrow's changemakers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-white text-lg">
                  To empower entrepreneurs, startups, corporates, and institutions by delivering holistic legal, IP, and strategic consultancy solutions that simplify complexities, accelerate growth, and nurture innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white p-10 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Ideas into Assets?</h2>
          <p className="text-xl mb-8">
            Whether you're a startup founder, an enterprise innovator, or an academic institution, our team is ready to help you navigate the complex landscape of intellectual property and business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/talktoexpert"><button className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Schedule a Consultation
            </button></a>
            <a href="/services"><button className="bg-transparent border-2 border-white hover:bg-blue-800 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Explore Our Services
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;