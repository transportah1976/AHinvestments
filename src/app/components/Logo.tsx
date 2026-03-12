const logoImage = '/assets/logo.png';

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="AH Investments - Transport & Packaging" 
      className={className}
    />
  );
}
