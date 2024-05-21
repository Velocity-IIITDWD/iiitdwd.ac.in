interface AboutIIITProps {
  aboutText: string;
}
const AboutIIIT = ({ aboutText }: AboutIIITProps) => {
    return (
        <div className="w-full p-8 flex flex-col items-center bg-dwd-secondary2/40">
            <span className="font-bold mb-4 text-3xl md:text-4xl text-dwd-primary">
        About IIIT Dharwad
            </span>
            <p className="md:text-lg">{aboutText}</p>
        </div>
    );
};

export default AboutIIIT;
