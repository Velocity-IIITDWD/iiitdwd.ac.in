const ShortCampusVideo = () => {
  return (
    <div className="w-full flex gap-4 p-8 items-center justify-center">
      <iframe
        className="rounded-md w-3/5"
        height="315"
        src="https://www.youtube.com/embed/5A8hThnROHs?si=QsaWacwdQSoRBXFG"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <span className="text-2xl font-bold  text-dwd-primary">
        A Short Video on IIIT Dharwad
      </span>
    </div>
  );
};

export default ShortCampusVideo;
