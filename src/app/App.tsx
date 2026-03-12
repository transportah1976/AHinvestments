import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';

const favicon = 'https://images.unsplash.com/photo-1770944182436-9e7b470a7669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBsb2dpc3RpY3MlMjBjb21wYW55JTIwZmF2aWNvbiUyMGljb258ZW58MXx8fHwxNzczMzQ5ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

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