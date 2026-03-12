import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';
import favicon from 'figma:asset/908ac7fc59c7fd27f5e335c50a720308a90c5c17.png';

export default function App() {
  useEffect(() => {
    // Set favicon dynamically
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = favicon;
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // Set apple touch icon
    const appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.href = favicon;
    document.getElementsByTagName('head')[0].appendChild(appleTouchIcon);
  }, []);

  return <RouterProvider router={router} />;
}