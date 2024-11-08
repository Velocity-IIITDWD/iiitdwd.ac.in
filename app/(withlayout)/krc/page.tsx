// pages/index.tsx
import type { NextPage } from 'next';
import UpperFold from '@/components/academics/krc/upperfold';
import SecondFold from '@/components/academics/krc/secondfold';
import ThirdFold from '@/components/academics/krc/thirdfold';
import FourthFold from '@/components/academics/krc/fourthfold';
import FifthFold from '@/components/academics/krc/fifthfold';

const Home: NextPage = () => {
  return (
    <div>
      <UpperFold />
      <SecondFold />
      <ThirdFold />
      <FourthFold />
      <FifthFold />
    </div>
  );
};

export default Home;
