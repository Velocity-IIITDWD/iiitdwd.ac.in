import Head from 'next/head';
import { facilities } from '../../../data/campus/facilities';
import Card from '../../../components/campus/facilities/Card';

const FacilitiesPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Facilities Page</title>
        <meta name="description" content="Facilities description" />
      </Head>
      <main className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-10 mt-10 text-center text-[#164573]">
          Facilities
        </h2>
        {facilities.map((facility, index) => (
          <Card
            key={index}
            title={facility.title}
            items={facility.items}
            imageUrl={facility.imageUrl}
            isEven={index % 2 === 0}
          />
        ))}
      </main>
    </div>
  );
};

export default FacilitiesPage;
