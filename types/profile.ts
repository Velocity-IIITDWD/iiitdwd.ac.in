export type Profile = {
  content: string[];
  imageURL: string;
  title: string;
};

export type ProfileGroup = {
  title: string;
  profiles: Profile[];
};
