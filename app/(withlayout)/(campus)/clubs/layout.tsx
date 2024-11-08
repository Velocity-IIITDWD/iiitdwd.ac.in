import { Metadata } from 'next';

export default function AcademicsLayout({ children } : { children: React.ReactNode }) {
  return children;
}

export const metadata: Metadata = {
  title: 'Clubs',
  description: 'Discover the vibrant student clubs at IIIT Dharwad, including Velocity, Iridescence, GDSC IIIT Dharwad, and more. From development to photography, competitive programming to blockchain, our clubs offer a diverse range of activities for students to explore their passions and interests. Join us and be a part of our dynamic community!'
};
