import director from "@/assets/images/faculty/director.jpg";
import Image from "next/image";
interface DirectorsMessageProps {
  heading: string;
  text: string;
  directorName: string;
}
const DirectorsMessage = ({
  heading,
  text,
  directorName,
}: DirectorsMessageProps) => {
  return (
    <div className="flex p-4 mt-4 flex-col items-center">
      <span className="text-4xl mb-8 text-dwd-primary font-semibold">
        Directors Message
      </span>
      <p className="p-4">
        <Image
          src={director}
          alt={"Image of Director"}
          className="float-left w-5/12 lg:w-1/3 mb-4 mr-8"
        />
        <span className="text-dwd-primary font-semibold text-lg">
          {heading}
        </span>
        <br />
        <span>{text}</span>
        <br />
        <br />
        <span className="self-start text-dwd-primary text-lg font-bold">
          {directorName}
        </span>
        <br />
        <span className="self-start">Director IIIT Dharwad</span>
      </p>
    </div>
  );
};

export default DirectorsMessage;
