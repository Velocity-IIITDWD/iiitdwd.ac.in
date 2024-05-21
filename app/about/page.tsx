import { About, aboutData } from '@/data/about';
import Image from 'next/image';
import main_gate from '@/assets/images/campus/main_gate.jpg';
import DirectorsMessage from '@/components/about/DirectorsMessage';
import OurFamily from '@/components/about/OurFamily';
import OurVision from '@/components/about/OurVision';
import OurMission from '@/components/about/OurMission';
import CoreValues from '@/components/about/CoreValues';
import DirectorBriefProfile from '@/components/about/DirectorBriefProfile';
import AboutIIIT from '@/components/about/AboutIIIT';
import ShortCampusVideo from '@/components/about/ShortCampusVideo';

const aboutPage = () => {
  const about: About = aboutData;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full min-h-40 sm:min-h-72 lg:min-h-96 relative">
        <Image
          src={main_gate}
          alt={'Image of Main Gate'}
          fill={true}
          priority
          style={{
            objectFit: 'cover',
            objectPosition: '70% 47%',
          }}
        />
      </div>

      <AboutIIIT aboutText={about.aboutText} />

      <DirectorsMessage
        heading={about.directorsMessage.heading}
        directorName={about.directorName}
        text={about.directorsMessage.text}
      />
      <DirectorBriefProfile
        directorName={about.directorName}
        briefProfile={about.briefProfile}
      />
      <OurFamily />
      <OurVision vision={about.vision} />
      <OurMission missions={about.missions} />
      <CoreValues coreValues={about.coreValues} />
      <ShortCampusVideo />
    </div>
  );
};

export default aboutPage;
