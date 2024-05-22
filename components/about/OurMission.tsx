interface OurMissionProps {
  missions: {
    text: string;
    id: string;
  }[];
}
const OurMission = ({ missions }: OurMissionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center p-8 gap-4 w-full justify-items-center">
      <span className="col-span-1 md:col-span-3 mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-dwd-primary">
        Our Mission
      </span>
      {missions?.map((mission) => (
        <div
          key={mission.id}
          className="bg-dwd-primary p-4 rounded-md text-center md:text-lg w-full h-full min-h-44  sm:min-h-28 sm:max-w-96 md:min-h-28  lg:min-h-52 lg:max-w-96 text-white text-md"
        >
          {mission.text}
        </div>
      ))}
    </div>
  );
};

export default OurMission;
