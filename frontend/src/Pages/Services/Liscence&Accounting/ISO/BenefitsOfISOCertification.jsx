import React from "react";
import { Helmet } from "react-helmet";
import {
  FaCheckCircle,
  FaChartLine,
  FaShieldAlt,
  FaGlobeAmericas,
} from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const BenefitsOfISOCertification = () => {
  return (
    <>
      <Helmet>
        <title>
          Benefits of ISO Certification | Vastav Intellect and IP Solutions
        </title>
        <meta
          name="description"
          content="Discover the benefits of ISO certification for your business. Improve efficiency, customer satisfaction, and more."
        />
        <meta
          name="keywords"
          content="ISO certification, benefits, quality management, environmental management, information security, Vastav Intellect, consulting, India"
        />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />{" "}
        {/* Replace with your actual URL */}
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Main Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                Key Benefits of ISO Certification
              </h2>
              <p className="text-lg text-gray-700">
                Achieving ISO certification can significantly improve your
                organization's performance, enhance its reputation, and open new
                opportunities. Here's how:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaChartLine className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Increased Efficiency & Productivity
                    </h3>
                    <p className="text-gray-600">
                      Streamline your processes, reduce waste, and improve
                      operational efficiency through a structured management
                      system.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaCheckCircle className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Enhanced Customer Satisfaction
                    </h3>
                    <p className="text-gray-600">
                      Consistently meet customer requirements, improve
                      product/service quality, and build stronger relationships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaShieldAlt className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Improved Risk Management
                    </h3>
                    <p className="text-gray-600">
                      Identify, assess, and mitigate risks across your
                      organization, enhancing business continuity and
                      resilience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaGlobeAmericas className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Access to New Markets
                    </h3>
                    <p className="text-gray-600">
                      Meet supplier requirements and gain a competitive
                      advantage in global markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - replaced with a "call to action" */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Ready to Achieve ISO Certification?
              </h2>
              <p className="text-gray-700 mb-4">
                Contact Vastav Intellect and IP Solutions today to learn how we
                can help you get certified and unlock these benefits for your
                organization.
              </p>
              <a
                href="/contact" // Replace with your actual contact page URL
                className="bg-blue-800 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 inline-block"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Expanded Benefits Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Explore the Advantages in Detail
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaCheckCircle className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                <p className="text-gray-600 mb-4">
                  ISO standards emphasize understanding and meeting customer
                  needs, leading to increased satisfaction and loyalty.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Improved customer communication
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Consistent product/service quality
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaChartLine className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Process Improvement</h3>
                <p className="text-gray-600 mb-4">
                  ISO standards promote a process-based approach, leading to
                  more efficient and effective operations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Streamlined workflows
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Reduced waste and errors
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaShieldAlt className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Risk Mitigation</h3>
                <p className="text-gray-600 mb-4">
                  By identifying and addressing potential risks, ISO standards
                  enhance business continuity and resilience.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Proactive risk management
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Improved business continuity
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <GiTakeMyMoney className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
                <p className="text-gray-600 mb-4">
                  ISO certification can lead to cost savings through improved
                  efficiency, reduced waste, and fewer errors.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Reduced operational costs
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Improved resource utilization
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaGlobeAmericas className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Reputation</h3>
                <p className="text-gray-600 mb-4">
                  ISO certification demonstrates a commitment to quality,
                  safety, and environmental responsibility, enhancing your brand
                  image.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Improved stakeholder trust
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Increased brand value
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaGlobeAmericas className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Regulatory Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  ISO standards help organizations comply with relevant laws and
                  regulations, reducing the risk of fines and penalties.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Meet legal requirements
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Reduce the risk of non-compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BenefitsOfISOCertification;
