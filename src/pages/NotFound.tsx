import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-night py-24 text-cream">
      <div className="container-page">
        <p className="font-display text-8xl font-extrabold leading-none text-marigold-500">404</p>
        <h1 className="mt-4 font-display text-5xl font-extrabold leading-none sm:text-6xl">This stall has gone dark.</h1>
        <p className="mt-5 max-w-md text-cream/70">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back to the celebration.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
