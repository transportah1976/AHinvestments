import logoImage from 'figma:asset/a266568bddcde42826338ac9082adbaba10bb5c5.png';

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="AH Investments - Transport & Packaging" 
      className={className}
    />
  );
}
