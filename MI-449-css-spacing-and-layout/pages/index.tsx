import { Layout } from '@/components/layout';
import { About, Contact, Projects, Skills } from '@/components/page-sections';
import { ObserverProvider } from '@/utils/intersection-observer';

const pageSections = [About, Skills, Projects, Contact];

const Home = () => {
  return (
    <Layout>
      {pageSections.map(
        (Child: () => JSX.Element, index: number): JSX.Element => {
          return (
            <ObserverProvider key={index + 'home'}>
              <Child />
            </ObserverProvider>
          );
        }
      )}
    </Layout>
  );
};

export default Home;
