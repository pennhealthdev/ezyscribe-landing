"use client";

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useNavigationHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const handleNavigation = async (url: string) => {
      if (!url.includes(window.location.origin)) {
        return;
      }

      const response = await fetch(url);
      const text = await response.text();

      const transition = (document as any).startViewTransition(() => {
        const bodyMatch = text.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        if (bodyMatch) {
          document.body.innerHTML = bodyMatch[1];
        }

        const titleMatch = text.match(/<title[^>]*>(.*?)<\/title>/i);
        if (titleMatch) {
          document.title = titleMatch[1];
        }
      });

      transition.ready.then(() => {
        window.scrollTo(0, 0);
      });
    };

    router.events.on('routeChangeStart', handleNavigation);

    return () => {
      router.events.off('routeChangeStart', handleNavigation);
    };
  }, [router]);
};

export default useNavigationHandler;
