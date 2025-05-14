import React from 'react';
import MyPhoto from '../assets/profile.jpg'; 

const Home = () => {
  return (
    <section
      name='home'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row items-center justify-center h-full'>
        <div className='flex-1 text-center md:text-left'>
          <p className='text-pink-500 text-lg mb-2'>Hi, my name is</p>
          <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Mohamed Ashik
          </h1>
          <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0] mt-2'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I specialize in building exceptional digital experiences. Currently focused on building responsive full-stack web applications.
          </p>
        </div>
        <div className='flex-1 mt-8 md:mt-0 flex justify-center'>
          <div className='w-[280px] h-[370px] relative overflow-hidden rounded-2xl shadow-xl border border-white/10'>
            <img
              src={MyPhoto}
              alt='Mohamed Ashik'
              className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;