const aboutItems = [
  {
    label: 'Project done',
    number: 3,
  },
];
const About = () => {
  return (
    <section
      id='about'
      className='section'
    >
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
            Hi, I&apos;m Salaheddine Mjydila! I turn ideas into high-performance,
            accessible, and SEO-friendly web applications. With React, Laravel,
            and TypeScript, I&apos;ve built projects like an Attendance System and a
            Dental Supply E-commerce platform, plus small apps that sharpen my
            skills. I&apos;m a fast learner, detail-focused, and passionate about
            creating clean, efficient code that delivers real impact. Let&apos;s
            build something amazing together.
          </p>
          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-bold md:text-4xl'>
                    {number}
                  </span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>
                    +
                  </span>
                </div>
                <p className='text-sm text-zinc-400'>{label}</p>
              </div>
            ))}
            <img
              src='/images/logo.svg'
              alt='Logo'
              width={30}
              height={30}
              className='ml-auto md:w-[40px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
