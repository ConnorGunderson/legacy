import _ from 'lodash';

import { Footer } from '.';
import { NavBar } from '.';
interface BodyProps {
  children: JSX.Element[] | JSX.Element | any;
}

export const Body = ({ children }: BodyProps) => {
  return (
    <main className={`h-full relative`}>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};
