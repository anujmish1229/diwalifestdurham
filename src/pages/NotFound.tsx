import { Link } from "react-router-dom";
import { StringLights } from "../components/decorative";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-night-sky bg-stars py-24 text-center">
      <StringLights className="absolute inset-x-0 top-0 h-10 w-full text-saffron-300" count={16} height={40} />
      <div className="container-page flex flex-col items-center">
        <h1 className="font-marquee text-3xl text-saffron-50 sm:text-4xl">
          This stall has gone dark.
        </h1>
        <p className="mt-4 max-w-md text-saffron-50/60">
          The page you're looking for doesn't exist. Let's get you back to
          the celebration.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
