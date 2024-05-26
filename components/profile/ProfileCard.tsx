import Image from 'next/image';

export type Profile = {
  content: string[];
  imageURL: string;
  title: string;
};

export default function ProfileCard({
  content,
  imageURL,
  title,
}: Profile) {
  return (
    <div className="flex flex-col rounded-md overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_2px_5px_rgb(0,0,0,0.2)]">
      <div className="relative aspect-square flex items-center">
        <Image src={imageURL} fill={true} objectFit="contain" alt={title} />
      </div>
      <div className="bg-white flex-1">
        <div className="flex flex-col p-4">
          <b className="text-lg text-dwd-primary">{title}</b>
          {content.map((line, index) => (
            <span className="text-sm p-1 font-semibold" key={index}>
              {line}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
