/**
 * Components
 */
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/project-1.webp',
    title: 'Dental Supply app',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Laravel',
      'MySQL',
    ],
    projectLink: 'https://dentalmaroc.netlify.app/',
  },
  {
    imgSrc: '/images/project-2.webp',
    title: 'Mini Youtube clone',
    tags: ['API', 'SPA', 'SPA', 'MUI'],
    projectLink: 'https://vibetube-watch.netlify.app/',
  },
  {
    imgSrc: '/images/project-3.webp',
    title: 'Attendance management system',
    tags: ['Development', 'API', 'Laravel', 'MySQL', 'SPA'],
    projectLink: '',
  },
  {
    imgSrc: '/images/project-4.webp',
    title: 'notetaking web app',
    tags: ['Web-design', 'Development',],
    projectLink: 'https://salahstack.github.io/noteKeeper/',
  },
];

const Work = () => {
  return (
    <section
      className='section'
      id='work'
    >
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>My portfolio highlights</h2>
        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes='reveal-up'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
