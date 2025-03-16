import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
  const token = localStorage.getItem("token"); // Get JWT token

  useEffect(() => {
    if (!token) {
      setIsLoading(false); // No token, no need to verify
      return;
    }

    // Function to verify the token
    const verifyToken = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/protected`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setIsAuthenticated(true); // Token is valid
        } else {
          localStorage.removeItem("token"); // Remove invalid token
          setIsAuthenticated(false); // Token is invalid
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsAuthenticated(false); // Handle errors (e.g., network issues)
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    verifyToken(); // Call the verification function
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return <Outlet />; // Allow access if authenticated
};

export default ProtectedRoute;