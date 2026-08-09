import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="section-eyebrow">404</p>
      <h1 className="mt-4 text-3xl font-bold text-diya-900 sm:text-4xl">
        This page has burned out.
      </h1>
      <p className="mt-3 max-w-md text-ink/60">
        The page you're looking for doesn't exist. Let's get you back to the
        celebration.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
