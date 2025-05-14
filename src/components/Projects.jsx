import React, { useState } from 'react';
import proj1 from '../assets/projects/image.png';
import proj2 from '../assets/projects/image2.png';
const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const projects = [
    {
      name: 'CareSphere',
      image: proj1,
      github: 'https://github.com/Ashik-50/CARESPHERE',
      live: 'https://c-frontend.onrender.com',
      description: 'A responsive healthcare platform for managing patient data and appointments.',
    },
    {
      name: 'Cloud Cart',
      image: proj2,
      github: 'https://github.com/Ashik-50/Ashik-50.github.io',
      live: 'https://ashik-50.github.io/Cloudcart/',
      description: 'An ecommerce project for showcasing and buying electronic gadgets and appliances.',
    },
  ];
  return (
    <section name='projects' className='w-full bg-gray-800 text-gray-300 py-20 px-6'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold border-b-4 border-pink-600 inline-block'>Projects</h2>
          <p className='mt-4 text-gray-400 text-lg'>A selection of work demonstrating design and development skills.</p>
        </div>
        <div className='grid gap-12 sm:grid-cols-1 md:grid-cols-2'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group bg-[#1f2a42] rounded-2xl overflow-hidden shadow-md hover:shadow-pink-600/30 transition-shadow duration-300 relative'
            >
              <div className='absolute inset-0 backdrop-blur-sm bg-white/5 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-2xl z-10'></div>
              <div className='relative z-20'>
                <img
                  src={project.image}
                  alt={project.name}
                  className='w-full h-56 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300'
                />
                <div className='p-6'>
                  <h3 className='text-2xl font-semibold mb-2 group-hover:text-pink-400 transition-colors duration-300'>{project.name}</h3>
                  <p className='text-gray-400 mb-4'>{project.description}</p>
                  <div className='flex gap-4'>
                    <a href={project.github} target='_blank' rel='noopener noreferrer'>
                      <button className='px-5 py-2 border border-pink-600 text-pink-500 hover:bg-pink-600 hover:text-white rounded-md transition-all'>
                        Code
                      </button>
                    </a>
                    <a href={project.live} target='_blank' rel='noopener noreferrer'>
                      <button className='px-5 py-2 bg-pink-600 text-white hover:bg-pink-500 rounded-md transition-all'>
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div
            className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt='Project Preview' className='max-w-[90%] max-h-[90%] rounded-lg shadow-xl' />
          </div>
        )}
      </div>
    </section>
  );
};
export default Projects;