import React from "react";

function Mern() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            MERN Stack <span className="text-blue-400">Full Course</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Master Full-Stack JavaScript Development
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join our comprehensive 6-month MERN Stack course and learn to build dynamic, scalable web applications from front-end to back-end using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-slate-700 px-6 py-3 rounded-lg">
              <span className="text-2xl font-bold">6 Months</span>
              <p className="text-sm opacity-80">Full-time Intensive</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* What is MERN Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What is MERN Stack?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MERN Stack is a popular full-stack development framework that uses JavaScript throughout the entire application, making it efficient and powerful for modern web development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-linear-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🍃</div>
              <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
              <p className="text-sm opacity-90">NoSQL database for flexible data storage</p>
            </div>
            <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Express.js</h3>
              <p className="text-sm opacity-90">Web application framework for Node.js</p>
            </div>
            <div className="bg-linear-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-xl font-semibold mb-2">React.js</h3>
              <p className="text-sm opacity-90">Library for building user interfaces</p>
            </div>
            <div className="bg-linear-to-br from-green-600 to-green-700 text-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🟢</div>
              <h3 className="text-xl font-semibold mb-2">Node.js</h3>
              <p className="text-sm opacity-90">JavaScript runtime for server-side</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Syllabus */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Course Syllabus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Month 1-2: Foundations</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>HTML5 and CSS3</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>JavaScript Fundamentals</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>ES6+ Features</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Version Control with Git</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Month 3: React Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>React Components & JSX</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>State & Props Management</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>React Hooks</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Routing with React Router</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>API Integration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Month 4: Back-End with Node.js</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Node.js Fundamentals</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Express.js Framework</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>RESTful API Development</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Middleware & Authentication</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Error Handling</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Month 5: MongoDB Database</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>MongoDB Basics</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Mongoose ODM</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Database Design</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Data Modeling</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>CRUD Operations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Month 6: Integration & Deployment</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Full-Stack Integration</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Authentication & Authorization</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Cloud Deployment</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Final Project</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full shrink-0 mt-1"></div>
                <p className="text-gray-600">Build complete web applications using MERN stack</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full shrink-0 mt-1"></div>
                <p className="text-gray-600">Implement user authentication and authorization</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full shrink-0 mt-1"></div>
                <p className="text-gray-600">Work with databases and perform CRUD operations</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full shrink-0 mt-1"></div>
                <p className="text-gray-600">Deploy applications to production environments</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full shrink-0 mt-1"></div>
                <p className="text-gray-600">Follow industry best practices for code quality</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full shrink-0 mt-1"></div>
                <p className="text-gray-600">Collaborate using version control systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites & Career */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Prerequisites</h2>
              <p className="text-gray-600 mb-4">
                Basic knowledge of programming concepts is helpful but not required. We'll start from the fundamentals and build up your skills progressively.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-700">
                  <strong>Note:</strong> No prior experience needed! Our course is designed for beginners who want to become full-stack developers.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Career Opportunities</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Full-Stack Developer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>MERN Stack Developer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Web Application Developer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Front-End Developer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Back-End Developer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of successful developers who have transformed their careers with our MERN Stack course.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg font-semibold text-lg transition duration-300 shadow-lg">
            Enroll Now - Limited Seats Available
          </button>
        </div>
      </section>
    </div>
  );
}

export default Mern;
