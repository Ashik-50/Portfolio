import React from 'react';

const skills = {
  'Frontend': ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  'Backend': ['Spring Boot', 'MySQL'],
  'Programming Languages': ['C++', 'Java', 'Python'],
  'Tools & Platforms': ['Git', 'AWS', 'Excel', 'Postman'],
  'Soft Skills': ['Teamwork', 'Problem Solving', 'Communication', 'Adaptability'],
};

const Skills = () => {
  return (
    <section
      name='skills'
      className='w-full bg-gray-800 text-gray-200 py-24 px-4'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-14'>
          <h2 className='text-5xl font-bold text-white mb-4 inline border-b-4 border-pink-600'>Skills</h2>
          <p className='text-lg text-gray-400 mt-4'>
            A modern snapshot of my technical and professional toolset.
          </p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className='group bg-[#1f2a42] rounded-2xl p-6 shadow-lg hover:shadow-pink-600/30 transition-shadow duration-300'
            >
              <h3 className='text-xl font-semibold text-white group-hover:text-pink-500 mb-4 transition-colors duration-300'>
                {category}
              </h3>
              <ul className='flex flex-wrap gap-3'>
                {items.map((skill) => (
                  <li
                    key={skill}
                    className='bg-[#131e35] text-sm text-pink-300 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-pink-600 hover:text-white shadow-md hover:shadow-lg'
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
