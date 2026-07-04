import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
        Error 404
      </p>
      <h1 className="mb-6 font-display text-6xl italic text-text-primary md:text-8xl">
        Page not found.
      </h1>
      <p className="mb-10 max-w-sm text-sm text-muted">
        The page you&rsquo;re looking for has moved or never existed. Let&rsquo;s
        get you back on track.
      </p>
      <Link
        to="/"
        className="gradient-border rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-transform duration-300 hover:scale-105"
      >
        Back home
      </Link>
    </div>
  );
};

export default NotFound;
