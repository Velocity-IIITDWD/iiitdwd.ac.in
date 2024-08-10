const ShortCampusVideo = () => {
  return (
    <div className=" w-11/12 grid grid-cols-1 sm:grid-cols-3 min-h-72 md:min-h-96  md:flex-row-reverse gap-4 p-8 items-center justify-items-center">
      <span className="text-xl sm:text-2xl text-left font-bold text-dwd-primary ">
        Indian Institute of Information Technology(IIIT) Dharwad Campus Tour
      </span>
      <iframe
        width="560" 
        height="315" 
        className="rounded-md w-auto min-h-80  xl:w-3/5 sm:col-span-2 text-left shadow hover:shadow-2xl"
        src="https://www.youtube.com/embed/_QLrIgjopCg?si=GrjaKptEy4LEp2uW&autoplay=1"
        title="YouTube video player"
        //frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      
    </div>
  );
};

export default ShortCampusVideo;
