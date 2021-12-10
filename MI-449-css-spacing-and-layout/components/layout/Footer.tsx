import { IoCodeSlash } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className='text-center bg-purple-700 text-lg text-white p-2 shadow-md w-full flex justify-center children:px-4'>
      <h4>
        &copy; Connor Gunderson
      </h4>
      <p>Site Code: <a href="https://github.com/ConnorGunderson/portfolio" target="_blank"><IoCodeSlash className="inline" size="1.25em"/></a></p>
    </footer>
  );
};
