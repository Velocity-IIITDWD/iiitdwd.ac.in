import Image from 'next/image';
import kioskImage from '@/assets/krc/kiosk.webp'; // Adjust the path to where the image is stored

const SecondFold = () => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] min-h-[50vh] overflow-x-hidden">
      <Image
        src={kioskImage} // Use the imported image
        alt="Library Background"
        layout="fill"
        quality={100}
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-[#04091E] opacity-70 z-10"></div>
      <div className="absolute inset-0 flex justify-center items-center text-white z-20">
        <div className="container mx-auto px-6 py-12 lg:gap-8 max-w-screen-lg">
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="flex flex-col justify-center items-center text-center p-4 max-w-[90%] md:max-w-[80%] mx-auto">
              <p
                className="text-base lg:text-base"
                style={{
                  fontSize: '16px',
                  letterSpacing: '1px',
                  lineHeight: '1.5',
                }}
              >
                The Knowledge Resources Centre is fully automated and equipped
                with the necessary software tools, RFID technology, and a
                biometric-enabled circulation system.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4 max-w-[90%] md:max-w-[80%] mx-auto">
              <p
                className="text-base lg:text-base"
                style={{
                  fontSize: '16px',
                  letterSpacing: '1px',
                  lineHeight: '1.5',
                }}
              >
                The KRC has a rich collection of reference books and textbooks,
                as well as subscriptions to technical and general print journals
                and magazines.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4 max-w-[90%] md:max-w-[80%] mx-auto">
              <p
                className="text-base lg:text-base"
                style={{
                  fontSize: '16px',
                  letterSpacing: '1px',
                  lineHeight: '1.5',
                }}
              >
                KRC also has a spacious reading area on the first floor of the π
                Block (Main Building) with a good collection of reference books.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4 max-w-[90%] md:max-w-[80%] mx-auto">
              <p
                className="text-base lg:text-base"
                style={{
                  fontSize: '16px',
                  letterSpacing: '1px',
                  lineHeight: '1.5',
                }}
              >
                The KRC is Wi-Fi-enabled and has a separate textbook section at
                the e Block (Academic Building) that allows users to borrow,
                return, or renew books using the KIOSK (24/7).
              </p>
            </div>
          </div>
          <div className="block lg:hidden text-center p-4">
            <p
              className="text-xs sm:text-sm md:text-base"
              style={{
                fontSize: '14px',
                letterSpacing: '1.2px',
                lineHeight: '1.5',
              }}
            >
              The Knowledge Resources Centre is fully automated and equipped
              with the necessary software tools, RFID technology, and a
              biometric-enabled circulation system. The KRC has a rich
              collection of reference books and textbooks, as well as
              subscriptions to technical and general print journals and
              magazines. KRC also has a spacious reading area on the first floor
              of the π Block (Main Building) with a good collection of reference
              books. The KRC is Wi-Fi-enabled and has a separate textbook
              section at the e Block (Academic Building) that allows users to
              borrow, return, or renew books using the KIOSK (24/7).
            </p>
          </div>
        </div>
        <div className="hidden lg:flex absolute inset-0 justify-center items-center pointer-events-none">
          <div className="w-[85%] h-px bg-white"></div>
        </div>
        <div className="hidden lg:flex absolute inset-0 justify-center items-center pointer-events-none">
          <div className="h-[70%] w-px bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default SecondFold;
