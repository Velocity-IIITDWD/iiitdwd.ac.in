import Link from 'next/link';

const OurFamily = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 items-center">
      <span className="col-span-1 sm:col-span-2 md:col-span-3 text-center mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-dwd-primary">
        Our Family
      </span>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl transition delay-100 duration-300"
        href={'/visitor'}
      >
        Visitor
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl
        transition delay-100 duration-300"
        href={'/board_of_governers'}
      >
        Board of Governers
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl transition delay-100 duration-300"
        href={'/senate'}
      >
        Senate
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl transition delay-100 duration-300"
        href={'/chairperson'}
      >
        Chairperson&apos;s Message
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl transition delay-100 duration-300"
        href={'/former_directors'}
      >
        Former Directors
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl transition delay-100 duration-300"
        href={'/finance_committee'}
      >
        Finance Committee
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl transition delay-100 duration-300"
        href={'/faculty'}
      >
        Faculty
      </Link>
      <Link
        className="bg-dwd-primary hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl transition delay-100 duration-300"
        href={'/staff'}
      >
        Staff
      </Link>
      <Link
        className="bg-dwd-primary col-span-1 sm:col-span-2 md:col-span-1 hover:bg-dwd-secondary2/40 border-2 p-3 border-dwd-primary hover:text-dwd-primary text-white text-center rounded-full text-lg md:text-xl transition delay-100 duration-300"
        href={'/building_and_works'}
      >
        Building and Works Committee
      </Link>
    </div>
  );
};

export default OurFamily;
