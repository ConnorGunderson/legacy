import _ from 'lodash';
import React, { useRef } from 'react';

const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

export const NavBar = () => {
  const ref = useRef(null);

  const handleClick = (e: React.MouseEvent) => {
    if (ref.current) ref.current.classList.remove('text-purple-700');
    const { target } = e;
    ref.current = target;
    ref.current.classList.add('text-purple-700');
  };
  return (
    <nav className='sticky top-0 w-full z-10 bg-white navbar shadow-md p-4'>
      {navLinks.map((l, index) => {
        return (
          <a
            href={'#' + l.toLowerCase()}
            onClick={(e: React.MouseEvent) => handleClick(e)}
            key={index}
          >
            {l}
          </a>
        );
      })}
    </nav>
  );
};
