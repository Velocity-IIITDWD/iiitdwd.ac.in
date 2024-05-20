import React from 'react';
import data from '../data/HomePage.json';

interface AnnouncementsProps {}

const Announcements: React.FC<AnnouncementsProps> = () => {
    return (
        <div className="Announcements mt-4 w-full sm:w-1/3 lg:w-40% lg:ml-5%">
            <div className="block rounded-lg shadow-secondary-1 border border-gray-400">
                <div className="border-b-2 border-neutral-100 px-6 py-3 font-bold text-3xl bg-customBlue text-cardText">
          Announcements
                </div>
                <div className="p-6">
                    <blockquote>
                        {data.announcements.map((announcement, index) => (
                            <div key={index}>
                                <p className="text-xl mb-2">{announcement}</p>
                                <hr className="w-95% border border-gray-700"/>
                            </div>
                        ))}
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Announcements;