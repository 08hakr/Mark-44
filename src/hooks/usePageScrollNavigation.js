import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

// Define the order of pages for navigation
const pageOrder = [
  '/',
  '/services',
  '/product',
  '/about',
  '/team',
  '/career',
  '/contact',
];

export const usePageScrollNavigation = () => {
  const router = useRouter();
  const isNavigating = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (isNavigating.current) {
        return;
      }

      const { deltaY } = event;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Do nothing if the page isn't scrollable
      if (scrollableHeight <= 0) return;

      const isAtTop = window.scrollY === 0;
      const isAtBottom = window.scrollY >= scrollableHeight - 2; // -2px buffer
      const currentPageIndex = pageOrder.indexOf(router.pathname);

      let targetPage = null;

      if (deltaY > 0 && isAtBottom) {
        // Scrolling Down at the bottom
        if (currentPageIndex < pageOrder.length - 1) {
          targetPage = pageOrder[currentPageIndex + 1];
        }
      } else if (deltaY < 0 && isAtTop) {
        // Scrolling Up at the top
        if (currentPageIndex > 0) {
          targetPage = pageOrder[currentPageIndex - 1];
        }
      }

      if (targetPage) {
        isNavigating.current = true;
        router.push(targetPage);

        // Cooldown to prevent multiple navigations
        timeoutRef.current = setTimeout(() => {
          isNavigating.current = false;
        }, 1000); // 1-second cooldown
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [router]); // Re-run effect if router object changes
};