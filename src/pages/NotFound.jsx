import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div>
      <h1 className="hero">404 not foundr</h1>
      <div className="text-center hero-content">
        <h1 className="text-8xl font-bold mb-8">Ooop!</h1>
        <p className="text-5xl mb-8">404 - Page not found!</p>
        <Link to="/" className="btn btn-primary btn-lg">
          <FaHome className="mr-2">Back to home</FaHome>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
