import '@/styles/globals.css';
import '@/styles/tailwind.css';
import '@/styles/animations.css';
import { AuthProvider } from '../utils/auth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
