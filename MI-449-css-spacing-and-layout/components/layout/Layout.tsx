import { Body, Header } from '.';
import { SuccessModal } from './SuccessModal';

interface LayoutProps {
  children?: JSX.Element[] | JSX.Element;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};
