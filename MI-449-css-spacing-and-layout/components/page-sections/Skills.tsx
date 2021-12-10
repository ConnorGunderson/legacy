import { useObserver } from '@/utils/intersection-observer';
import {
  SiTypescript,
  SiGraphql,
  SiApollographql,
  SiPostgresql,
  SiNextDotJs,
  SiReact,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiSass,
  SiNodeDotJs,
  SiAuth0,
  SiMongodb,
  SiAmazonaws,
} from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import { AiOutlineCode } from 'react-icons/ai';

export const Skills = () => {
  const { ref } = useObserver();

  return (
    <section
      className={`flex flex-col w-full bg-purple-200 `}
      style={{ minHeight: '500px' }}
      ref={ref}
      id='skills'
    >
      <header className='flex flex-col justify-center items-center'>
        <h2 className='mx-auto text-center text-4xl p-2 border-b-2  border-purple-400'>
          Skills <AiOutlineCode className='inline' />
        </h2>
      </header>
      <article className='skills flex-1 grid grid-cols-1 sm:grid-cols-3 text-center pb-4 mt-10 children:flex children:flex-col children:items-center children:mt-4 children:md:mt-0 lg:w-4/5 lg:mx-auto'>
        <div>
          <h3>HTML5 & JSX</h3>
          <div>
            <SiHtml5 size='3em' className='text-yellow-600' />
          </div>
        </div>
        <div>
          <h3>JavaScript/Typescript</h3>
          <div className='flex flex-row justify-around w-1/2'>
            <SiJavascript size='3em' className='text-yellow-400' />
            <SiTypescript size='3em' className='text-blue-500' />
          </div>
        </div>
        <div>
          <h3>React & NextJS</h3>
          <div className='flex flex-row justify-around w-1/2'>
            <SiReact size='3em' className='text-blue-600' />
            <SiNextDotJs size='3em' className='text-black' />
          </div>
        </div>
        <div>
          <h3>CSS & Scss/Sass</h3>
          <div className='flex flex-row justify-around w-1/2'>
            <SiCss3 size='3em' className='text-blue-600' />
            <SiSass size='3em' className='text-purple-400' />
          </div>
        </div>
        <div>
          <h3>NodeJS</h3>
          <div>
            <SiNodeDotJs size='3em' className='text-node' />
          </div>
        </div>
        <div>
          <h3>Authentication</h3>
          <div className='flex flex-row justify-around w-3/5'>
            <SiAuth0 size='3em' className='text-black' />
            <img src='/jwt.svg' alt="jsonwebtoken" style={{ height: '3em' }} />
            <img src='/oauth.png' alt="oauth" style={{ height: '3em' }} />
          </div>
        </div>
        <div>
          <h3>SQL & noSQL/document DB's</h3>
          <div className='flex flex-row justify-around w-3/5'>
            <SiPostgresql size='3em' className='text-blue-400' />
            <SiMongodb size='3em' className='text-green-500' />
            <SiFirebase size='3em' className='text-yellow-500' />
          </div>
        </div>
        <div>
          <h3>Cloud Computing</h3>
          <div className='flex flex-row justify-around w-3/5'>
            <SiFirebase size='3em' className='text-yellow-500' />
            <SiAmazonaws size='3em' className='text-yellow-500' />
            <IoLogoVercel size='3em' className='text-yellow-black' />
          </div>
        </div>
        <div>
          <h3>REST and GraphQL</h3>
          <div className='flex flex-row justify-around w-1/2'>
            <SiGraphql size='3em' className='text-purple-400' />
            <SiApollographql size='3em' className='text-purple-600' />
          </div>
        </div>
      </article>
    </section>
  );
};
