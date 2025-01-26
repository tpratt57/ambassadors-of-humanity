import React, { useState, useEffect } from "react";

const images = [
    "/assets/20170106T1119-0015-CNS-MIGRATION-HOPE_0.jpg",
    "/assets/926005230.JPG",
    "/assets/AdobeStock_272814049.jpeg",
    "/assets/AdobeStock_675737794.jpeg",
    "/assets/Immigrants-Make-American-Great.jpg",
    "/assets/resources-for-immigrant-and-refugee-communities_hero.jpeg",
    "/assets/web19-immigrants-welcome-here-sign-1160x768.jpg",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-center transition-opacity duration-1000 ease-in-out mt-20 mx-auto z-0 ">
      
      <div className="relative w-3/4 h-3/4 bg-cover bg-center rounded-xl shadow-xl overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url('${images[currentImage]}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl"></div>
        <div className="relative z-10 text-center text-white drop-shadow-lg p-6">
          <h1 className="text-5xl font-extrabold text-yellow-300">Supporting Immigrant Families</h1>
          <p className="text-lg mt-4 max-w-lg mx-auto text-yellow-200">Providing legal resources, advocacy, and community support for those in need.</p>
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-pink-600 transition-all">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-20 flex justify-center space-x-4 z-20">
        {images.map((_, index) => (
          <span key={index} className={`h-3 w-3 rounded-full ${index === currentImage ? 'bg-pink-500' : 'bg-yellow-300'}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;
