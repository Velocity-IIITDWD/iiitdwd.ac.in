interface AboutIIITProps {
  aboutText: string;
}
const AboutIIIT = ({ aboutText }: AboutIIITProps) => {
  return (
    <div className="w-full p-8 flex md:px-16 lg:px-24 2xl:px-44 flex-col items-center bg-dwd-secondary2/40">
      <span className="font-bold mb-4 text-3xl md:text-4xl text-dwd-primary">
        About IIIT Dharwad
      </span>
      <p className="text-justify">{aboutText}</p>
    </div>
  );
};

export default AboutIIIT;
