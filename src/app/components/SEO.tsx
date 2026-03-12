import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
}

export function SEO({ title, description, keywords, type = 'website' }: SEOProps) {
  const location = useLocation();
  
  useEffect(() => {
    const fullTitle = `${title} | AH Investments`;
    document.title = fullTitle;
    
    // Helper function to set or create meta tags
    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        
        // Handle name vs property attributes (standard vs Open Graph)
        if (selector.includes('name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        } else if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        }
        
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Standard Meta Tags
    setMetaTag('meta[name="title"]', 'content', fullTitle);
    setMetaTag('meta[name="description"]', 'content', description);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'content', keywords);
    }

    // Open Graph Meta Tags
    const url = `https://ahinvestments.pl${location.pathname === '/' ? '' : location.pathname}`;
    setMetaTag('meta[property="og:title"]', 'content', fullTitle);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', url);
    setMetaTag('meta[property="og:type"]', 'content', type);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Twitter Cards
    setMetaTag('meta[property="twitter:title"]', 'content', fullTitle);
    setMetaTag('meta[property="twitter:description"]', 'content', description);
    setMetaTag('meta[property="twitter:url"]', 'content', url);

  }, [title, description, keywords, location.pathname, type]);

  return null;
}
