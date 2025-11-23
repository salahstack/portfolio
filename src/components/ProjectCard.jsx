/**
 * Node modules
 */
import PropTypes from 'prop-types';
/**
 * Lucide icons
 */
import { Github } from 'lucide-react';
import Tooltip from './Tooltip';
const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  githubLink,
  classes = '',
}) => {
  return (
    <div
      className={
        'p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 ring-1 ring-inset ring-zinc-50/5 transition-colors ' +
        classes
      }
    >
      <figure className='img-box aspect-square rounded-lg mb-4'>
        <img
          src={imgSrc}
          alt={title}
          loading='lazy'
          className='img-cover'
        />
      </figure>
      <div className='flex items-center justify-between gap-4'>
        <div>
          <h3 className='title-1 mb-3'>{title}</h3>
          <div className='flex flex-wrap items-center gap-2'>
            {tags.map((label, key) => (
              <span
                key={key}
                className='h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg'
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-4 flex items-center justify-between gap-4'>
        <Tooltip content={`View ${title} on GitHub`}>
          <a
            href={githubLink}
            aria-label={`View ${title} on GitHub`}
            target='_blank'
            rel='noopener noreferrer'
            className='h-11 grow rounded-lg grid place-items-center text-zinc-50 bg-zinc-900 cursor-pointer'
          >
            <Github aria-hidden='true' />
          </a>
        </Tooltip>

        <a
          href={projectLink}
          aria-label={`Visit ${title} project`}
          target='_blank'
          className='w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0'
        >
          <span
            className='material-symbols-rounded'
            aria-hidden='true'
          >
            arrow_outward
          </span>
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  githubLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
