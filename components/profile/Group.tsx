import { Profile } from '@/components/profile/ProfileCard';
import ProfileCard from '@/components/profile/ProfileCard';

export type Group = {
  title: string;
  profiles: Profile[];
};

export default function Group({ title, profiles }: Group) {
  return (
    <section className="py-2">
      <h2 className="pl-10 text-dwd-primary text-2xl font-bold">{title}</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 pt-4 p-10">
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
