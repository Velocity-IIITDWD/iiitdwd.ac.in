interface OurMissionProps {
  missions: {
    text: string;
    id: string;
  }[];
}
const romanNumerals = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
];

const OurMission = ({ missions }: OurMissionProps) => {
  return (
    <div className="grid mission items-center p-8 gap-4 w-full justify-items-center">
      <span className="mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-dwd-primary">
        Our Mission
      </span>
      {missions?.map((mission, index) => (
        <div
          key={mission.id}
          className="mission-item bg-dwd-primary p-4 rounded-md text-center md:text-lg w-full h-full sm:max-w-96 md:max-w-[600px] text-white text-md flex flex-col justify-center min-h-full"
          data-index={romanNumerals[index]} // Use the Roman numeral from the mapping
        >
          {mission.text}
        </div>
      ))}
    </div>
  );
};

export default OurMission;
