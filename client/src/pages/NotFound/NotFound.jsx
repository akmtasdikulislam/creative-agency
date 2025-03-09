import { HiArrowLongLeft, HiOutlineEnvelope } from "react-icons/hi2";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="bg-base-100 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-primary-600 mb-2 text-3xl font-bold">404</p>

      <h1 className="heading-2 mb-4">Page not found</h1>

      <p className="body-text text-secondary mx-auto mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link to="/" className="btn btn-primary flex items-center">
          <HiArrowLongLeft className="mr-2 text-lg" />
          Go back home
        </Link>
        <Link
          to="mailto:admin@creative-agency.com"
          className="btn btn-accent flex items-center"
        >
          Contact support
          <HiOutlineEnvelope className="ml-2 text-lg" />
        </Link>
      </div>
    </main>
  );
}
