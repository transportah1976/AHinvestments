import logoImage from 'figma:asset/a266568bddcde42826338ac9082adbaba10bb5c5.png';

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AH Investments",
    "description": "Kompleksowe rozwiązania transportowe i pakujące dla firm. Transport krajowy i międzynarodowy.",
    "url": "https://ahinvestments.pl",
    "logo": logoImage,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-885-222-277",
      "contactType": "customer service",
      "email": "hszymczak@ahinvestments.pl",
      "areaServed": ["PL", "EU", "CH", "GB"],
      "availableLanguage": ["Polish"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jana Pawła II 30 H",
      "addressLocality": "Swolszewice Duże",
      "postalCode": "97-320",
      "addressCountry": "PL"
    },
    "sameAs": []
  };
}
