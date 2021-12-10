import { GiSpartanHelmet } from 'react-icons/gi';
import { useObserver } from '@/utils/intersection-observer';
import { SiGithub } from 'react-icons/si';
import { IoPersonCircleOutline } from 'react-icons/io5';
export const About = () => {
  const { ref } = useObserver();

  return (
    <div
      className={` flex flex-col md:h-about justify-center items-center md:flex-row`}
      ref={ref}
      id='about'
    >
      <section className='md:w-2/6 py-8 flex flex-col justify-center items-center'>
        <header>
          <h2 className='text-2xl lg:text-3xl'>
            <span className='text-purple-700'>Education</span> and Interests
          </h2>
        </header>
        <article className='text-center pt-8 flex flex-col items-center'>
          <p className='text-green-800'>
            Michigan State University{' '}
            <GiSpartanHelmet className='inline' size='2em' />
          </p>
          <b>Media and Information</b>
          <b>22 Years Old</b>
          <div className="flex items-center">
            <a
              href='https://github.com/ConnorGunderson'
              className='mt-4'
              target='_blank'
            >
              <SiGithub size='3em' />
            </a>
            <a
              href='/connor_gunderson_resume.pdf'
              className='mt-4 font-bold pl-4 text-4xl'
              target='_blank'
            >
              CV
            </a>
          </div>

        </article>
      </section>
      <section className='flex-1 flex flex-col mx-auto p-5'>
        <header>
          <h2 className='mx-auto text-center text-4xl p-2 border-b-2 w-52  border-purple-400'>
            About <IoPersonCircleOutline className='inline'/>
          </h2>
        </header>
        <article className='pt-8'>
          <p>
            <NewLine>Hello! </NewLine>I am currently a Senior at Michigan State
            University persuing a Media and Information degree. I am a
            NodeJS/JavaScript + React web developer and designer. In other
            words; I design, code, and help bring businesses online through web
            programming.
          </p>
          <p className='pt-8'>
            <NewLine>My </NewLine>main focus and goal for my future as a
            developer is to find ways to use technology to improve people's
            lives.
          </p>
          <p className='pt-8'>
            <NewLine>Aside</NewLine> from programming, I love to play video
            games, workout, and read books. My favorite games to play are real
            time strategy games (RTS's) like Factorio, Oxygen Not Included, and
            Rimworld. My favorite books include; Journey to the West by Wu
            Cheng'en, Republic by Plato, Clean Code by Robert C. Martin, and
            Meditations by Marcus Aurelius.{' '}
            <b>I do not use any social media.</b>
          </p>
        </article>
      </section>
    </div>
  );
};

type Children = JSX.Element[] | JSX.Element | string;
const NewLine = ({ children }: { children: Children }): JSX.Element => {
  return <span className='text-purple-700'>{children}</span>;
};
