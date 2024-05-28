import Image from 'next/image';
import krcImage from '@/assets/krc/krc.jpg'; // Adjust the path to where the image is stored

const UpperFold = () => {
  return (
    <div className="relative h-[70vh] lg:h-[80vh] overflow-x-hidden">
      {/* Image with a negative z-index to ensure it is below the header */}
      <Image
        src={krcImage} // Use the imported image
        alt="Library Background"
        layout="fill"
        objectFit="cover"
        quality={100} // Consider adjusting quality for performance
        className="z--10" // Negative z-index
      />

      {/* Dark overlay with less negative z-index to appear above the image but below the header */}
      <div className="absolute inset-0 bg-black opacity-60 z--5"></div>

      {/* Text content with less negative z-index than the overlay but still negative */}
      <div className="absolute inset-0 flex justify-center items-center text-white z-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-center pl-2 pr-6 max-w-screen-lg h-full">
          <div className="w-full lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0 lg:pr-0 text-center lg:text-left">
            <h1 className="text-7xl lg:text-7xl font-bold">
              Knowledge Resource Centre
            </h1>
          </div>
          <div className="hidden lg:block h-full w-px bg-white mx-4"></div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8 text-center lg:text-left">
            <p className="text-lg lg:text-2xl">
              The IIIT Dharwad Knowledge Resource Centre is innovative and
              user-centred, to develop, organize, preserve, and deliver
              information to the IIIT Dharwad community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperFold;
