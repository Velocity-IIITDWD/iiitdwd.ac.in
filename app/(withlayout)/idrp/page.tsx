import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-3 p-8 max-w-4xl mx-auto border border-gray-200 shadow-lg">
        <div className="text-center mb-6 flex flex-col gap-4">
          <Image
            src={'/images/idrp-header.webp'}
            width={0}
            height={0}
            sizes="100%"
            style={{ height: 'auto', width: '100%' }}
            alt={'IIIT Research Park Logo'}
            className="h-16 mx-auto"
          />
          <p className="text-center text-xl">
            IIIT Dharwad Research Park invites applications for Startup
            Incubation from innovative, disruptive startups in deep-tech space.
          </p>
          <div>
            <p className="text-center text-xl">Startup Incubation 2025</p>
            <p>Ignite | Incubate | Innovate</p>
          </div>
          <Image
            src={'/images/idrp-body.webp'}
            width={0}
            height={0}
            sizes="100%"
            style={{ height: 'auto', width: '100%' }}
            alt="Main Flyer Image"
            className="w-full h-auto"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-2 text-sm mb-6">
          <div>
            <h3 className="font-bold text-lg">Focus Areas:</h3>
            <ul className="list-disc pl-4">
              <li>Computer Vision &amp; Extended Reality</li>
              <li>Speech &amp; Natural Language Processing</li>
              <li>Generative AI</li>
              <li>Blockchain</li>
              <li>Cyber Security</li>
              <li>Space Tech</li>
              <li>IoT</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Markets:</h3>
            <ul className="list-disc pl-4">
              <li>Industry 4.0</li>
              <li>Healthcare</li>
              <li>Financial Services</li>
              <li>Semiconductor</li>
              <li>Agriculture &amp; Food</li>
              <li>Mobility &amp; Automotive</li>
              <li>Digital Commerce</li>
              <li>Others</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Offerings:</h3>
            <ul className="list-disc pl-4">
              <li>Product Development Support</li>
              <li>Deep Tech Expertise and Labs</li>
              <li>Business Mentorship</li>
              <li>Startup School</li>
              <li>Branding, Outreach &amp; Visibility</li>
              <li>Market &amp; Funding Access</li>
              <li>Patent Support</li>
              <li>Office Space @ our Campus</li>
            </ul>
          </div>
        </div>

        <p>
          For more information, contact:{' '}
          <Link
            className="text-blue-500 underline"
            href={'mailto:info.idrp@iiitdwd.ac.in'}
          >
            info.idrp@iiitdwd.ac.in
          </Link>
        </p>

        <div className="w-full flex flex-col items-center">
          <p>Apply Now</p>
          <Link
            className="text-blue-500 underline"
            href={'https://forms.gle/gE25xrgatkahVPCz6'}
          >
            https://forms.gle/gE25xrgatkahVPCz6
          </Link>
        </div>

        <Image
          className="self-center py-2"
          src="/images/idrp-qr.webp"
          width={48}
          height={48}
          sizes="100%"
          alt={'qr'}
        />

        <p className="text-justify">
          Everybody has an idea! Not all ideas are successful though. Only some
          go on to become spectacular businesses. Why is it so?
        </p>
        <p>
          The answer is in the &ldquo;Idea to Market&rdquo; execution playbook.
        </p>
        <p className="text-justify">
          Well, what&apos;s so unique about this playbook? After all, like every
          other successful company, all we need to do is build a product, create
          a team, find customers, sell our product, and generate revenue!
        </p>
        <p className="text-justify">
          Therein lies the challenge. Success lies in the{' '}
          <span className="font-bold">execution detailing</span>.
        </p>
        <ul className="list-disc pl-4">
          <li>
            Would it not be wonderful to have somebody who has built products
            successfully before, to help you?
          </li>
          <li>
            What if you had a technology guru guiding that tricky tech journey?
          </li>
          <li>
            How about getting help along the way in building that world-class
            skill-complementing team; people make or break businesses?
          </li>
          <li>
            Why not learn from the best to translate your idea and passion into
            revenue…
          </li>
        </ul>

        <p>
          IIIT Dharwad Research Park offers all this and more. Applications are
          now open for the first cohort of 2025. You could opt for resident or
          virtual incubation.
        </p>

        <h3 className="font-bold text-lg">Eligibility:</h3>
        <ul className="list-disc pl-4">
          <li>
            If you have a strong technology idea in any of the focus areas
            mentioned above, a well-thought-out business model, and a clear
            vision for growth, then apply.
          </li>
          <li>
            You could be at any stage - Idea, PoC, MVP, Revenue - it does not
            matter. Apply.
          </li>
        </ul>
        <p>
          <span className="font-semibold">Application Deadline:</span> Jan 31
          <sup>st</sup>, 2025
        </p>
        <p>
          Download the pitch presentation template here:
          <a
            href="https://docs.google.com/presentation/d/1IcR75KuWH6Gh5rwEMv-qHV8hueFd5IXD/edit#slide=id.g2f85eb8e56d_0_0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline ml-1"
          >
            Pitch Deck Template
          </a>
        </p>
        <p>
          To apply, please visit{' '}
          <Link
            className="text-blue-500 underline"
            href="https://forms.gle/gE25xrgatkahVPCz6"
          >
            https://forms.gle/gE25xrgatkahVPCz6
          </Link>{' '}
          and submit your pitch deck by the deadline.
        </p>
        <p>
          For more information, contact:{' '}
          <Link
            className="text-blue-500 underline"
            href={'mailto:info.idrp@iiitdwd.ac.in'}
          >
            info.idrp@iiitdwd.ac.in
          </Link>
        </p>
      </div>
    </>
  );
};
