import Link from 'next/link';

const Announcement = () => {
  return (
    <div className="bg-red-100 text-red-800 py-2 text-center font-semibold">
      <p>
        🚗 Yeni avtomobil təklifləri ilə tanış olun! <strong>50% endirim</strong> bu həftə ərzində!
      </p>
      <Link
        href="/offers"
        className="inline-block mt-2 text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition"
      >
        Təklifləri yoxlayın
      </Link>
    </div>
  );
};

export default Announcement;
