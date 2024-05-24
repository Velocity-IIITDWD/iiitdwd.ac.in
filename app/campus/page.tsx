import { NextPage } from 'next';
import Header from '../Header';
import Footer from '../Footer';
import MainContent from '../../components/campus/MainContent';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainContent />
    </div>
  );
};

export default Home;
