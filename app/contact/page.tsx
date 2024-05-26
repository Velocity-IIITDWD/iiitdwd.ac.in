'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaPlane, FaTrain } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('slide-in-left-animate')) {
              entry.target.classList.add('slide-in-left');
            } else if (
              entry.target.classList.contains('slide-in-right-animate')
            ) {
              entry.target.classList.add('slide-in-right');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      const elements =
        containerRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col mt-4 space-y-4">
      <div className="relative">
        <Image
          src="/main_building.JPG"
          alt="Contact Banner"
          width={1920}
          height={1080}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Contact</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5671.792036388141!2d75.02120041187774!3d15.39292320151374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1716397238919!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="md:w-2/5 p-4 bg-gray-800 text-white">
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Address</h3>
            <p>
              Indian Institute of Information Technology Dharwad <br />{' '}
              Ittigatti Rd, near Sattur Colony, Karnataka 580009
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Email</h3>
            <p>contact@iiitdwd.ac.in</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Phone</h3>
            <p>+91-836-2212839, +91-836-2212840</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Fax</h3>
            <p>+91-836-2212841</p>
          </div>
          <Link
            className="font-medium w-fit text-lg mt-4 border p-2 rounded-md flex gap-4 items-center justify-center "
            href={'/contact_info'}
          >
            More Contact Information
            <ExternalLink />
          </Link>
        </div>
      </div>

      <div className="container mx-auto p-4 text-black" ref={containerRef}>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="w-full lg:w-1/2 p-4 bg-gray-600 rounded-lg shadow-md transition-transform transform animate-on-scroll slide-in-left-animate">
            <h2 className="text-xl font-bold mb-4 text-white">
              Email Addresses
            </h2>
            <ul className="list-none space-y-4">
              <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <strong>General Information:</strong>{' '}
                <a href="mailto:info@iiitd.ac.in" className="text-blue-500">
                  contact@iiitdwd.ac.in
                </a>
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <strong>Academic:</strong>{' '}
                <a
                  href="mailto:admin-academic@iiitd.ac.in"
                  className="text-blue-500"
                >
                  admin-academic@iiitd.ac.in
                </a>
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <strong>Placement:</strong>{' '}
                <a
                  href="mailto:admin-placement@iiitd.ac.in"
                  className="text-blue-500"
                >
                  admin-placement@iiitd.ac.in
                </a>
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <strong>Website:</strong>{' '}
                <a
                  href="mailto:admin-web@iiitd.ac.in"
                  className="text-blue-500"
                >
                  admin-web@iiitd.ac.in
                </a>
              </li>
              <li>
                <strong className="text-white">Student Verification:</strong>
                <ul className="list-none pl-5 space-y-2">
                  <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <strong>For UG:</strong>{' '}
                    <a
                      href="mailto:admin-btech@iiitd.ac.in"
                      className="text-blue-500"
                    >
                      admin-btech@iiitd.ac.in
                    </a>
                  </li>

                  <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <strong>For Ph.D.:</strong>{' '}
                    <a
                      href="mailto:admin-phd@iiitd.ac.in"
                      className="text-blue-500"
                    >
                      admin-phd@iiitd.ac.in
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-4 bg-customBlue rounded-lg shadow-md transition-transform transform animate-on-scroll slide-in-right-animate">
            <h2 className="text-xl font-bold mb-4 text-white">
              Direction to Campus
            </h2>
            <p className="text-white">
              To reach the campus, coming from Sattur Cross, follow these
              directions:
            </p>
            <ul className="list-none pl-5 space-y-2 mt-2 marker-white">
              <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                You can directly take a Auto Rickshaw directly to campus.
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                The local bus shuttle also runs from Sattur Cross to the campus.
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                You can also take the Bus Shuttle provided by the institute.
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                The institute is situated between Udaygiri and Ittigatti
                village.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 bg-amber-100 rounded-lg shadow-md transition-transform transform animate-on-scroll slide-in-right-animate">
          <div className="flex items-center mb-4">
            <FaPlane className="text-2xl mr-2" />
            <h2 className="text-xl font-bold">How to reach from the Airport</h2>
          </div>
          <p>
            If you are arriving at the Hubli Airport, here are the directions to
            reach the IIITDWD campus:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Take an Auto Rickshaw directly to the campus or take the bus
              shuttle from Airport to Hosur Cross.
            </li>
            <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              From Hosur Cross take the BRTS (Bus Rapid Transit System) to
              Sattur Cross.
            </li>
            <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              After reaching Sattur Cross take an Auto Rickshaw directly to the
              campus.
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-indigo-100 rounded-lg shadow-md transition-transform transform animate-on-scroll slide-in-left-animate">
          <div className="flex items-center mb-4">
            <FaTrain className="text-2xl mr-2" />
            <h2 className="text-xl font-bold">
              How to reach from the Railway Station
            </h2>
          </div>

          <h3 className="text-lg font-semibold">Hubli Railway Station</h3>
          <p>
            If you are arriving at the Hubli Railway Station, here are the
            directions to reach the IIITD campus:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              If you are reaching campus after midnight you have to take an Auto
              Rickshaw directly to campus or you can take BRTS to Sattur Cross.
            </li>
            <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              After reaching Sattur Cross you can take an Auto Rickshaw directly
              to the campus.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">
            Dharwad Railway Station
          </h3>
          <p>
            If you are arriving at the Dharwad Railway Station, here are the
            directions to reach the IIITD campus:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              You can directly take an Auto Rickshaw directly to campus or you
              can take an Auto Rickshaw to Court Circle BRTS Station.
            </li>
            <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              After that you can take BRTS from Court Circle to Sattur Cross
              BRTS Station.
            </li>
            <li className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              After that you can take an Auto Rickshaw directly to the campus.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
