import '../styles/globals.css';
// import { usePageScrollNavigation } from '../hooks/usePageScrollNavigation.js';

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // Activate the scroll navigation hook
  // usePageScrollNavigation();

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;