import data from '../mockData/homePageData.json';
import PlainCard from '@/components/ui/PlainCard';

const Departments = () => {
  return (
    <div className='departments mb-10 bg-light-grey'>
      <h3 className='text-3xl font-bold text-center underline my-6'>
        <a href='#'>Departments</a>
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
        {data.departments.map((department) => (
          <PlainCard
            key={department.name}
            imageUrl={department.logo}
            altText={department.name}
            text={department.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Departments;
