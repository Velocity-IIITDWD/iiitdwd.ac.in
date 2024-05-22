interface DirectorBriefProfileProps {
  directorName: string;
  briefProfile: string;
}
const DirectorBriefProfile = ({
  directorName,
  briefProfile,
}: DirectorBriefProfileProps) => {
  return (
    <div className="flex flex-col p-8 bg-dwd-secondary2/40 items-center">
      <span className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold  text-dwd-primary">
        Brief Profile of {directorName}
      </span>
      <p>{briefProfile}</p>
    </div>
  );
};

export default DirectorBriefProfile;
