import React from "react";
import { HiRefresh } from "react-icons/hi";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo/Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-blue-400">Macro</span>
              <span className="text-red-400">Flux</span>{" "}
              <span className="text-gray-300">Infotech</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Empowering your digital future with innovative solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400 text-sm md:text-base">
              <p>Email: macrofluxinfotech@gmail.com</p>
              <p>Phone: +91 7350940269</p>
              <p>
                Address: MacroFlux Infotech, Surya Complex B6 Opposite Orange
                Corner Pune-Nashik Highway, Sangamner{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MacroFlux Infotech. All rights
            reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Design and Developed with ❤️ by{" "}
            <Link
              to="https://sushant-sonawane.vercel.app/"
              className="text-blue-400 hover:underline"
            >
              Sushant Sonawane
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
