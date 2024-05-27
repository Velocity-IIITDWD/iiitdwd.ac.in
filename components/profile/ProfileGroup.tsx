import { type ProfileGroup } from '@/types/profile';
import ProfileCard from '@/components/profile/ProfileCard';

export function ProfileGroup({ title, profiles }: ProfileGroup) {
  return (
    <section className="p-2">
      <h2 className="pl-10 text-dwd-primary text-2xl font-bold">{title}</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 py-10 px-16">
        {profiles.map(({ content, title, imageURL }, index) => (
          <ProfileCard
            key={index}
            imageURL={imageURL}
            content={content}
            title={title}
          />
        ))}
      </section>
    </section>
  );
}
