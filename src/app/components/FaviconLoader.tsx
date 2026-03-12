import { useEffect } from 'react';
import logoImage from 'figma:asset/a266568bddcde42826338ac9082adbaba10bb5c5.png';

export function FaviconLoader() {
  useEffect(() => {
    // Update favicon dynamically
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = logoImage;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.type = 'image/png';
      newLink.href = logoImage;
      document.head.appendChild(newLink);
    }

    // Update apple touch icon
    const appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
    if (appleTouchIcon) {
      appleTouchIcon.href = logoImage;
    }

    // Update OG image for social media
    const ogImage = document.querySelector("meta[property='og:image']") as HTMLMetaElement;
    if (ogImage) {
      ogImage.content = logoImage;
    }

    const twitterImage = document.querySelector("meta[property='twitter:image']") as HTMLMetaElement;
    if (twitterImage) {
      twitterImage.content = logoImage;
    }
  }, []);

  return null;
}
