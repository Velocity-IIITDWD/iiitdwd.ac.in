interface OurVisionProps {
  vision: string;
}
const OurVision = ({ vision }: OurVisionProps) => {
    return (
        <div className="bg-dwd-secondary2/40 grid grid-cols-1 md:grid-cols-2 min-h-52 w-full items-center text-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-dwd-primary">
        Our Vision
            </span>
            <p className="md:text-xl self-start md:self-center">{vision}</p>
        </div>
    );
};

export default OurVision;
