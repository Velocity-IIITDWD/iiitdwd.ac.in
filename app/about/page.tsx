import { About, aboutData } from '@/data/about';
import Image from 'next/image';
import DirectorsMessage from '@/components/about/DirectorsMessage';
import OurFamily from '@/components/about/OurFamily';
import OurVision from '@/components/about/OurVision';
import OurMission from '@/components/about/OurMission';
import CoreValues from '@/components/about/CoreValues';
import DirectorBriefProfile from '@/components/about/DirectorBriefProfile';
import AboutIIIT from '@/components/about/AboutIIIT';
import ShortCampusVideo from '@/components/about/ShortCampusVideo';
import mainGateImage from '@/assets/main_gate.jpg';
import { Metadata } from 'next';

import './smoothScroll.css';

const AboutPage = () => {
  const about: About = aboutData;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full min-h-40 sm:min-h-72 lg:min-h-96 xl:min-h-112 relative">
        <Image
          src={mainGateImage}
          alt={'Main Gate Image'}
          fill={true}
          priority
          style={{
            objectFit: 'cover',
            objectPosition: '70% 47%',
          }}
        />
      </div>

      <div id="introduction" />
      <AboutIIIT aboutText={about.aboutText} />

      <div id="directors-message" />
      <DirectorsMessage
        heading={about.directorsMessage.heading}
        director={about.director}
        text1={about.directorsMessage.text1}
        text2={about.directorsMessage.text2}
        text3={about.directorsMessage.text3}
      />
      <div id="director-brief-profile" />
      <DirectorBriefProfile
        directorName={about.director.title}
        briefProfile={about.briefProfile}
      />

      <div id="family" />
      <OurFamily />

      <div id="vision" />
      <OurVision vision={about.vision} />
      <OurMission missions={about.missions} />
      <CoreValues coreValues={about.coreValues} />
      <ShortCampusVideo />
    </div>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: 'About',
};
