import Link from 'next/link';

export const Custom404 = () => (
  <div>
    <div className="bg" />
    <div className="content flex flex-col items-center justify-center gap-y-4">
      <h2 className="px-6 text-center">
        Sorry, we couldn&apos;t find that page.
      </h2>
      <Link href="/">
        <button type="button" className="font-light underline">
          Back home
        </button>
      </Link>
    </div>
  </div>
);

export default Custom404;
