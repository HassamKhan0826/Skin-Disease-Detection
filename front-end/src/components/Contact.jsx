import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
      <div className="text-gray-900 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-600">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl">
          We would love to hear from you! Reach out to us for any inquiries or
          feedback regarding Skin Disease Detection System.
        </p>
        <p className="text-lg md:text-xl mt-4">
          Email: <a href="mailto:info@dental-dynamo.com">info@skindiseasedetection.com</a>
        </p>
        <p className="text-lg md:text-xl mt-2">
          Phone: +1 (555) 123-4567
        </p>
        <p className="text-lg md:text-xl mt-2">
          Address: 123 Skin Health Avenue, Cityville, State, Zip
        </p>
      </div>
    </div>
  );
};

export default Contact;
