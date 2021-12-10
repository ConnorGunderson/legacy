import NextLink from 'next/link';
import { useAuth } from '../../utils/auth';

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className='w-full bg-white px-16 shadow-md sticky flex flex-col md:flex-row items-center justify-between  top-0 z-50 py-4'>
      <NextLink href='/'>
        <a>
          <h1 className='text-3xl headerText pb-4 md:pb-0'>MSU Onion</h1>
        </a>
      </NextLink>
      <nav>{user ? <DashBoard /> : <SignIn />}</nav>
    </header>
  );
};

const DashBoard = () => {
  const {logout} = useAuth()

  return (
    <nav className="children:px-2">
      <NextLink href='/new'>
        <a className='headerText'>New Post</a>
      </NextLink>
      <NextLink href='/dashboard'>
        <a className='headerText'>Dashboard</a>
      </NextLink>
      <button className='headerText' onClick={() => logout()}>Logout</button>
      
    </nav>
  );
};

const SignIn = () => {
  return (
    <NextLink href='/login'>
      <button className='w-32 shadow-md border hover:bg-strawberry-500 active:scale-105 transform hover:border-strawberry-500  text-white transition-colors duration-300 border-raspberry-500 bg-raspberry-500 p-2'>
        Sign In
      </button>
    </NextLink>
  );
};
