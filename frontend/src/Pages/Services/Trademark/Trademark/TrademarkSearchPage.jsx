import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  FaSearch,
  FaCheckCircle,
  FaShieldAlt,
  FaHistory,
} from "react-icons/fa";
import Notification from "../../../../components/NOtification";

const TrademarkSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [notification, setNotification] = useState(null);

  const showSuccessNotification = () => {
    setNotification({
      type: "success",
      message: "Success",
      description: "Trademark search completed successfully!",
    });
  };

  const showErrorNotification = (message) => {
    setNotification({
      type: "error",
      message: "Error",
      description: message,
    });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (notification && notification.type === "success") {
      const timer = setTimeout(() => {
        closeNotification();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      showErrorNotification("Please enter a search term");
      return;
    }

    setIsSearching(true);

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_APP_BACKEND_URL
        }/api/trademark-search?q=${encodeURIComponent(searchQuery)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results || []);
        showSuccessNotification();
      } else {
        showErrorNotification("Failed to perform trademark search.");
      }
    } catch (error) {
      console.error("Error performing trademark search:", error);
      showErrorNotification(
        "An error occurred while searching for trademarks."
      );
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          description={notification.description}
          onClose={closeNotification}
        />
      )}
      <Helmet>
        <title>Trademark Search | Vastav Intellect and IP Solutions</title>
        <meta
          name="description"
          content="Search for registered trademarks and ensure your brand is unique with our comprehensive trademark search service."
        />
        <meta
          name="keywords"
          content="trademark search, intellectual property, Vastav Intellect, IP Solutions, India, brand protection"
        />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Main Trademark Search Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                Trademark Search Services
              </h2>
              <p className="text-lg text-gray-700">
                Ensure your brand is unique and available for registration with
                our comprehensive trademark search service.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaSearch className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Comprehensive Search
                    </h3>
                    <p className="text-gray-600">
                      Search across multiple databases to identify potential
                      conflicts with existing trademarks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaHistory className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Historical Records
                    </h3>
                    <p className="text-gray-600">
                      Access historical trademark registrations and
                      applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaShieldAlt className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Risk Assessment</h3>
                    <p className="text-gray-600">
                      Evaluate potential risks and conflicts before filing your
                      trademark application.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Search Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Search for Trademarks
              </h2>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter brand name, keyword, or trademark"
                    required
                  />
                  <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                  disabled={isSearching}
                >
                  {isSearching ? "Searching..." : "Search Trademarks"}
                </button>
              </form>

              {/* Search Results */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  {searchResults.length > 0 ? "Search Results" : ""}
                </h3>
                {searchResults.length > 0 ? (
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 p-4 rounded-md hover:bg-blue-50 transition"
                      >
                        <h4 className="font-bold">{result.name}</h4>
                        <p className="text-sm text-gray-600">
                          Class: {result.class}
                        </p>
                        <p className="text-sm text-gray-600">
                          Status:{" "}
                          <span
                            className={`font-medium ${
                              result.status === "Registered"
                                ? "text-green-600"
                                : "text-orange-600"
                            }`}
                          >
                            {result.status}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Owner: {result.owner}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  searchQuery &&
                  !isSearching && (
                    <div className="text-center py-8 text-gray-500">
                      No trademarks found matching your search criteria.
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Our Trademark Search Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaSearch className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Identical Mark Search
                </h3>
                <p className="text-gray-600 mb-4">
                  Search for exact matches to your proposed trademark across all
                  registered marks.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Exact match identification
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Cross-class search
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaHistory className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phonetic Search</h3>
                <p className="text-gray-600 mb-4">
                  Find trademarks that sound similar to your proposed mark, even
                  if spelled differently.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Sound-alike identification
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Multilingual considerations
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaShieldAlt className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Comprehensive Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Get expert analysis of search results to assess registration
                  potential.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Risk assessment report
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Strategic recommendations
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

export default TrademarkSearchPage;
