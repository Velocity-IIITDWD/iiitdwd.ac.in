import { Metadata, NextPage } from 'next';
import MainContent from '@/components/campus/MainContent';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainContent />
    </div>
  );
};

export default Home;

export const metadata: Metadata = {
  title: 'Campus',
};
