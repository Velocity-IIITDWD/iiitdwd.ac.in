const ShortCampusVideo = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 min-h-72 md:min-h-96  md:flex-row-reverse gap-4 p-8 items-center justify-items-center">
      <span className="text-xl sm:text-2xl text-left font-bold text-dwd-primary ">
        Indian Institute of Information Technology(IIIT) Dharwad Campus Tour
      </span>
      <iframe
        className="rounded-md w-full min-h-80  xl:w-3/5 sm:col-span-2 text-left shadow hover:shadow-2xl"
        src="https://www.youtube.com/embed/_QLrIgjopCg?si=GrjaKptEy4LEp2uW"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      
    </div>
  );
};

export default ShortCampusVideo;
