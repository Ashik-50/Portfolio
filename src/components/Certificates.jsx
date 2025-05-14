import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: 'Google Cybersecurity Professional Certificate',
      provider: 'Google',
      link: 'https://coursera.org/share/a3bc3e96cc1796faf925037a4303fc69',
    },
    {
      title: 'Data Structures',
      provider: 'Scaler',
      link: 'https://moonshot.scaler.com/s/sl/gGC20MylPI',
    },
    {
      title: 'Algorithmic Toolbox',
      provider: 'Coursera',
      link: 'https://coursera.org/share/bdfad56e1cef98cbecbc3b69e42130c3',
    },
    {
      title: 'Generative AI',
      provider: 'Oracle',
      link: 'https://drive.google.com/file/d/1FxOxb7-mrrKt8KeMAVs-98sC87Z23fzK/view?usp=sharing',
    },
    {
      title: 'Ethical Hacking',
      provider: 'NPTEL',
      link: 'https://drive.google.com/file/d/1E_ZGUN1G453cd12wsjyYvjj3QP5LXNZQ/view?usp=sharing',
    },
    {
      title: 'Cyber Security and Privacy',
      provider: 'NPTEL',
      link: 'https://drive.google.com/file/d/1ZSzw6Ufb4Bv_4DuoeyatXASk6-arSzcj/view?usp=sharing',
    },
  ];
  return (
    <section
      name='certificates'
      className='w-full bg-gray-800 text-gray-300 py-20 px-4'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-extrabold inline border-b-4 border-pink-600'>
            Certificates
          </h2>
          <p className='mt-4 text-gray-400 text-lg'>
            A collection of certifications I've earned across domains like cybersecurity, data structures, and AI.
          </p>
        </div>
        <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {certificates.map((cert, index) => (
            <div
              key={index}
              className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-pink-600/30 transition-shadow duration-300 group'
            >
              <div>
                <span className='inline-block px-3 py-1 mb-3 text-sm font-medium text-pink-400 border border-pink-500 rounded-full'>
                  {cert.provider}
                </span>
                <h3 className='text-xl font-semibold text-white mb-4 leading-snug group-hover:text-pink-400 transition-colors duration-300'>
                  {cert.title}
                </h3>
              </div>
              <a
                href={cert.link}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-4 inline-flex items-center justify-center px-4 py-2 bg-pink-600 text-white text-sm font-semibold rounded-lg hover:bg-pink-500 transition-all duration-300 w-full'
              >
                View Certificate <FaExternalLinkAlt className='ml-2' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certificates;