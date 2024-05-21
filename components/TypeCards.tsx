import data from '../mockData/homePageData.json';
import Card from '@/components/ui/Card';

const TypeCard = () => {
  return (
    <>
      <div className='flex flex-wrap justify-evenly gap-2 mt-5'>
        {data.type.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            desc={item.des}
            buttonText='Learn More'
            handleClick={() => console.log(`Card '${item.name}' clicked!`)}
          />
        ))}
      </div>
    </>
  );
};

export default TypeCard;
