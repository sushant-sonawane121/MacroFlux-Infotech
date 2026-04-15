import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-blue-400">Macro</span><span className="text-red-400">Flux</span> Infotech
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering Your Future with Cutting-Edge IT Education
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our comprehensive IT classes and master the skills needed for today's digital world. From programming to cybersecurity, we've got you covered.
          </p>
          <button className="bg-slate-100 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition duration-300">
            Get Started Today
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About MacroFlux Infotech</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a leading IT education provider committed to delivering high-quality training in various technology domains. Our expert instructors and hands-on approach ensure you gain practical skills for real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our IT Courses</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">MERN Stack Development</h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Master the full-stack JavaScript development with MongoDB, Express.js, React, and Node.js. Build modern, scalable web applications from scratch.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">What You'll Learn:</h4>
                    <p className="text-gray-600 mb-4">This course is designed for Beginner to Advanced level learners, covering a comprehensive 6-month roadmap with hands-on projects.</p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-semibold text-blue-600">Month 1-2: Frontend Fundamentals</h5>
                        <p className="text-gray-600 text-sm">HTML5, CSS3, JavaScript ES6+, React basics</p>
                        <p className="text-gray-500 text-xs mt-1">Project: Personal Portfolio Website</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h5 className="font-semibold text-red-600">Month 3: Advanced Frontend</h5>
                        <p className="text-gray-600 text-sm">Redux, React Hooks, Responsive Design</p>
                        <p className="text-gray-500 text-xs mt-1">Project: E-commerce Product Catalog</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h5 className="font-semibold text-green-600">Month 4: Backend Development</h5>
                        <p className="text-gray-600 text-sm">Node.js, Express.js, RESTful APIs</p>
                        <p className="text-gray-500 text-xs mt-1">Project: REST API for Blog Management</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-semibold text-purple-600">Month 5: Database & Integration</h5>
                        <p className="text-gray-600 text-sm">MongoDB, Mongoose, Full-stack Integration</p>
                        <p className="text-gray-500 text-xs mt-1">Project: Social Media Dashboard</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-semibold text-yellow-600">Month 6: Advanced Projects & Deployment</h5>
                        <p className="text-gray-600 text-sm">Authentication, Deployment, Best Practices</p>
                        <p className="text-gray-500 text-xs mt-1">Project: Full MERN Stack E-commerce Platform</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-4">Tools: Git, npm, Postman, VS Code</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Learn More →
                  </button>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-linear-to-br from-blue-500 to-red-500 p-8 rounded-lg text-white">
                    <h4 className="text-xl font-semibold mb-4">Course Highlights</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">⏱️</span>
                        <span>6 Months Intensive Program</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">💼</span>
                        <span>Hands-on Projects</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🎓</span>
                        <span>Certificte</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">👨‍💻</span>
                        <span>Expert Mentorship</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">📚</span>
                        <span>Learning Mode Offline</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Why Choose MacroFlux Infotech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">Practical projects and real-world scenarios in every course.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📜</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Certified Courses</h3>
              <p className="text-gray-600">Industry-recognized certifications upon completion.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Support</h3>
              <p className="text-gray-600">Job placement assistance and career guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your IT Journey?</h2>
          <p className="text-xl mb-8">Enroll in our courses today and transform your career in tech.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
