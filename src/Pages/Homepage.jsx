import React from "react";

const Homepage = () => {
  return (
    <div className="px-4 md:px-8 py-12">
      <section id="home" className="max-w-4xl mx-auto text-gray-700">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Welcome to Simple Brand
        </h1>
        <p className="mb-4">
          This is the **Home** page of your React application. Here, you can add an introduction, highlights of your app, or any content you want your users to see first.
        </p>
        <p className="mb-4">
          The layout is simple, clean, and responsive. You can expand it with sections like Features, Services, or Testimonials below.
        </p>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Responsive design using Tailwind CSS</li>
            <li>Simple Navbar with active link highlighting</li>
            <li>Clean content sections for better readability</li>
            <li>Easy to extend with new sections or pages</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
