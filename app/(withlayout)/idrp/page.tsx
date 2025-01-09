import React from 'react';

import image1 from "@/public/image1.png"
import image2 from "@/public/image2.png"
import Image from 'next/image';

const Starter: React.FC = () => {
  return (
    <>
    <div className="bg-white p-8 max-w-4xl mx-auto border border-gray-200 shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-6">
        <Image
          src={image1}
          alt={'IIIT Research Park Logo'}
          className="h-16 mx-auto"
        />
        <h1 className="text-center font-bold text-xl mt-4">
          Startup Incubation 2025 <br /> Ignite | Incubate | Innovate
        </h1>
      </div>

      {/* Main Content */}
      <div className="mb-6">
        <p className="text-center text-lg font-semibold">
          IIIT Dharwad Research Park invites applications for Startup Incubation
          from innovative, disruptive startups in deep-tech space.
        </p>
        <Image
          src={image2}
          alt="Main Flyer Image"
          className="w-full h-auto mt-4"
        />
      </div>

      {/* Focus Areas, Markets, and Offerings */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <h3 className="font-bold text-lg">Focus Areas:</h3>
          <ul className="list-disc list-inside">
            <li>Computer Vision & Extended Reality</li>
            <li>Speech & Natural Language Processing</li>
            <li>Generative AI</li>
            <li>Blockchain</li>
            <li>Cyber Security</li>
            <li>Space Tech</li>
            <li>IoT</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Markets:</h3>
          <ul className="list-disc list-inside">
            <li>Industry 4.0</li>
            <li>Healthcare</li>
            <li>Financial Services</li>
            <li>Semiconductor</li>
            <li>Agriculture & Food</li>
            <li>Mobility & Automotive</li>
            <li>Digital Commerce</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Offerings:</h3>
          <ul className="list-disc list-inside">
            <li>Product Development Support</li>
            <li>Deep Tech Expertise and Labs</li>
            <li>Business Mentorship</li>
            <li>Startup School</li>
            <li>Branding, Outreach & Visibility</li>
            <li>Market & Funding Access</li>
            <li>Patent Support</li>
            <li>Office Space @ our Campus</li>
          </ul>
        </div>
      </div>

      {/* Details Section */}
      <div className="mb-6">
        <p className="text-justify">
          Everybody has an idea! Not all ideas are successful though. Only some go
          on to become spectacular businesses. Why is it so?
        </p>
        <p className="font-bold mt-2">The answer is in the "Idea to Market" execution playbook.</p>
        <p className="mt-4 text-justify">
          Well, what’s so unique about this playbook? After all, like every other
          successful company, all we need to do is build a product, create a team,
          find customers, sell our product, and generate revenue!
        </p>
        <p className="mt-4 text-justify">
          Therein lies the challenge. Success lies in the <span className="font-bold">execution detailing</span>.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Would it not be wonderful to have somebody who has built products successfully before, to help you?</li>
          <li>What if you had a technology guru guiding that tricky tech journey?</li>
          <li>How about getting help along the way in building that world-class skill-complementing team; people make or break businesses?</li>
          <li>Why not learn from the best to translate your idea and passion into revenue…</li>
        </ul>
      </div>

      {/* Eligibility and Application Details */}
      <div className="mb-6">
        <h3 className="font-bold text-lg">Eligibility:</h3>
        <ul className="list-disc list-inside">
          <li>
            If you have a strong technology idea in any of the focus areas
            mentioned above, a well-thought-out business model, and a clear
            vision for growth, then apply.
          </li>
          <li>
            You could be at any stage – Idea, PoC, MVP, Revenue – it does not
            matter. Apply.
          </li>
        </ul>
        <p className="font-semibold mt-4">
          Application Deadline: Jan 31<sup>st</sup>, 2025
        </p>
        <p className="mt-4">
          Download the pitch presentation template here:
          <a
            href="https://docs.google.com/presentation/d/1lcR75KuWH6GH5rwEMv-qHV8hueFd5IXD/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline ml-1"
          >
            Pitch Deck Template
          </a>
        </p>
      </div>

      {/* Apply Now Section */}
      <div className="text-center">
        <a
          href="https://forms.gle/gE25xrgatkahVPCz6"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
        <p className="mt-4">For more information, contact: info.idrp@iiitdwd.ac.in</p>
      </div>
    </div>
    </>
  );
};

export default Starter;
