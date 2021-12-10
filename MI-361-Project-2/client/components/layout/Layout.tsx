import { Header } from './Header';
import { Main } from './Main';

export const Layout = ({ children, className }) => {
  return (
    <>
      <Header />
      <Main className={className}>{children}</Main>
    </>
  );
};
