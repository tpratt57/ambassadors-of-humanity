import React from "react";

// WhoWeAre.jsx
const WhoWeAre = () => {
  return (
    <div id="who-we-are" className="container mx-auto mt-20 p-6 text-center ">
      <h1 className="text-5xl font-extrabold text-white">Who We Are</h1>
      <p className="text-lg text-yellow-300 mt-4 max-w-3xl mx-auto">
        Our organization is dedicated to supporting immigrant families by providing essential legal resources and advocacy. 
        We help sponsor families in need, ensuring they can navigate the process of becoming documented, legal U.S. citizens.
      </p>
      <p className="text-lg text-yellow-300 mt-4 max-w-3xl mx-auto">
        Through community efforts and collaboration with legal professionals, we work to make a tangible difference in the lives of those affected by deportation and immigration challenges.
      </p>
      <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
        Get Involved
      </button>
    </div>
  );
};

export default WhoWeAre;