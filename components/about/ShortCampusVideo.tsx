const ShortCampusVideo = () => {
  return (
    <div className="w-full flex flex-col min-h-72 md:min-h-96  md:flex-row-reverse gap-4 p-8 items-center justify-center">
      <span className="text-lg sm:text-2xl font-bold text-dwd-primary">
        A Short Video on IIIT Dharwad
      </span>
      <div className="h-full w-full md:w-7/12 lg:w-5/12">
        <iframe
          className="rounded-md w-full h-full"
          src="https://www.youtube.com/embed/5A8hThnROHs?si=QsaWacwdQSoRBXFG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ShortCampusVideo;
