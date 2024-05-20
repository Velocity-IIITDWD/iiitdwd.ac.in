'use client';
import Card from '@/components/ui/Card';
import data from '../data/HomePage.json';
import PlainCard from '@/components/ui/PlainCard';
import EventCarousel from '@/components/EventCrousel';
import './globals.css';
import Announcements from '@/components/Announcements';

export default function Home() {
    return (
        <div className="w-full px-4 my-2">
            <div className="flex flex-wrap justify-evenly gap-2">
                {data.type.map((item, index) => (
                    <Card
                        key={index}
                        title={item.name}
                        desc={item.des}
                        buttonText="Learn More"
                        handleClick={() => console.log(`Card "${item.name}" clicked!`)}
                    />
                ))}
            </div>

            <div className="flex flex-wrap justify-between mx-10 my-6">
                <Announcements />
                <EventCarousel />
            </div>

            <div className="departments mb-10">
                <h3 className="text-3xl font-bold text-center underline my-6">
                    <a href="#">Departments</a>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
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
        </div>
    );
}
