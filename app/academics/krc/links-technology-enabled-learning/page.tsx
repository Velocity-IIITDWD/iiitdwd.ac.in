// pages/index.tsx
import type { NextPage } from 'next';
import UpperFold from '@/components/academics/krc/usefulLinks/upperfold';
import FifthFold from '@/components/academics/krc/fifthfold';
import ThirdFold from '@/components/academics/krc/usefulLinks/thirdfold';

const Home: NextPage = () => {
  return (
    <div>
      <UpperFold paragraphText="Important Links for Technology Enabled Learning Under the ICT Initiatives of MoE"/>
      <ThirdFold />
      <FifthFold />
    </div>
  );
};

export default Home;
