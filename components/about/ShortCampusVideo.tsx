const ShortCampusVideo = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 min-h-72 md:min-h-96  md:flex-row-reverse gap-4 p-8 items-center justify-center">
      <span className="text-xl sm:text-2xl text-center font-bold text-dwd-primary">
        A Short Video on IIIT Dharwad
      </span>

      <iframe
        className="rounded-md w-full min-h-72 sm:col-span-2"
        src="https://www.youtube.com/embed/5A8hThnROHs?si=QsaWacwdQSoRBXFG"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ShortCampusVideo;
