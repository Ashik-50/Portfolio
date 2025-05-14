import React from 'react';

const About = () => {
  return (
    <section name='about' className='w-full min-h-screen bg-gray-800 text-gray-200 py-16'>
      <div className='max-w-[1000px] mx-auto px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-5xl font-extrabold text-white mb-4'>About Me</h2>
          <p className='text-lg text-[#8892b0] max-w-[700px] mx-auto'>
            A passionate full-stack developer focused on creating exceptional user experiences and scalable solutions.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          <div className='text-lg space-y-4'>
            <p>
              I'm Mohamed Ashik, a full-stack developer with expertise in both front-end and back-end development. I continuously explore new technologies to enhance my skills.
            </p>
            <p>
              I prioritize clean, efficient, and maintainable code while building intuitive digital experiences.
            </p>
          </div>
          <div className='space-y-6'>
            <div>
              <h3 className='text-2xl font-semibold text-white mb-2'>Education</h3>
              <div className='mt-2'>
                <p className='font-semibold text-white'>Sri Krishna College of Technology</p>
                <p>Bachelor of Computer Science Engineering</p>
                <p><strong>CGPA:</strong> <span className='font-mono'>8.33</span></p>
              </div>

              <div className='mt-2'>
                <p className='font-semibold text-white'>Nirmala Matha Convent Matric Higher Secondary School</p>
                <p>12th Grade</p>
                <p><strong>Marks:</strong> <span className='font-mono'>92.6%</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 mr-4 text-center'>
          <a
            href='/Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-500 transition-all duration-300 font-semibold'
          >
            Download Resume
          </a>
        </div>
        <div className='text-center mt-12'>
          <p className='text-lg text-[#8892b0]'>
            Feel free to reach out if you’d like to collaborate on any projects or discuss technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
