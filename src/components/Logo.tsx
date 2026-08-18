interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/logo.jpg"
      alt="Durham Diwali Festival"
      className={`h-14 w-14 shrink-0 rounded-full object-cover ${className}`}
    />
  );
}
