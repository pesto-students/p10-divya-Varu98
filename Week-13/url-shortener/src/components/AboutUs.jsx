import React from "react";

const AboutUs = () => {
  const gif =
    "https://tenor.com/en-GB/view/need-link-links-pirate-dealer-gif-22326020";
  return (
    <div className="bg-gray-100 py-10  mx-auto">
      <div className="container max-w-[70vw] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Little Link</h2>
        <p className="text-lg text-gray-600 mb-8">
          Simplify and Share with Ease
        </p>
        <p className="text-lg text-gray-800 mb-8">
          Effortlessly simplify and share long URLs with Little Link. Transform
          web addresses into concise, memorable links for social media, emails,
          and more. Say goodbye to long, cumbersome URLs and hello to
          convenience and simplicity.
        </p>
        <div className="flex items-center justify-center mb-10">
          <video autoPlay loop muted>
            <source
              src="https://media.tenor.com/fv-cPw-JouwAAAPo/need-link.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <p className="text-lg text-gray-800 mb-4">With Little Link, you can:</p>
        <ul className="list-disc list-inside mb-8">
          <li className="text-gray-800">
            Create short and snappy links in seconds
          </li>
          <li className="text-gray-800">
            Customize your links for branding purposes
          </li>
          <li className="text-gray-800">
            Track link performance and analytics
          </li>
          <li className="text-gray-800">
            Share your links effortlessly on social media platforms
          </li>
          <li className="text-gray-800">
            Enjoy a hassle-free experience with our user-friendly interface
          </li>
        </ul>
        <p className="text-lg text-gray-800">
          Join thousands of satisfied users and simplify your online sharing
          with Little Link today!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
