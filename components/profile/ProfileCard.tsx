import Image from 'next/image';
import { type Profile } from '@/types/profile';

export default function ProfileCard({ content, imageURL, title }: Profile) {
  return (
    <div className="flex flex-col rounded-md overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_1px_2px_rgb(0,0,0,0.2)]">
      <div className="relative aspect-square bg-gradient-to-b from-white to-zinc-100">
        <Image
          src={imageURL || '/profile/blank-profile-square.png'}
          fill={true}
          objectFit="contain"
          alt={title}
        />
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
