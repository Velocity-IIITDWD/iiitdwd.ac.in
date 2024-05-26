import Link from 'next/link';

const OurFamily = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 items-center">
      <span className="col-span-1 sm:col-span-2 md:col-span-3 text-center mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-dwd-primary">
        Our Family
      </span>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl"
        href="/visitors"
      >
        Visitor
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl"
        href="/boardOfGoverners"
      >
        Board of Governors
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl"
        href="/senate"
      >
        Senate
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl"
        href="/about/chairperson"
      >
        Chairperson&apos;s Message
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl"
        href="/buildingAndWorksCommittee"
      >
        Former Director
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl"
        href="/financeCommittee"
      >
        Finance Committee
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl"
        href="/faculty"
      >
        Faculty
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl"
        href="/staff"
      >
        Staff
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl"
        href="/buildingAndWorksCommittee"
      >
        Building and Works Committee
      </Link>
    </div>
  );
};

export default OurFamily;
