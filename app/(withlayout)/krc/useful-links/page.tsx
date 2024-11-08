// pages/index.tsx
import type { NextPage } from 'next';
import UpperFold from '@/components/academics/krc/usefulLinks/upperfold';
import FifthFold from '@/components/academics/krc/fifthfold';
import SecondFold from '@/components/academics/krc/usefulLinks/secondfold';

const Home: NextPage = () => {
  return (
    <div>
      <UpperFold paragraphText="Useful Links" />
      <SecondFold />
      <FifthFold />
    </div>
  );
};

export default Home;
