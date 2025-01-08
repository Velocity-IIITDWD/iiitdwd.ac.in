import React from 'react';

const Starter: React.FC = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
          </div>
        </nav>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Call For Applications
            </h1>
            <h2 className="text-2xl text-center text-blue-100">
              Incubation Program 2025
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Well, what's so unique about this playbook? After all, like every other successful
              company, all we need to do is build a product, create a team, find customers, sell
              our product, generate revenue!
            </p>
            <p className="text-xl font-semibold text-blue-900 mb-12">
              Therein lies the challenge. Success lies in the execution detailing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Focus Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Computer Vision & Extended Reality',
                    'Speech & Natural Language Processing',
                    'Generative AI',
                    'Blockchain',
                    'Cyber Security',
                    'Space Tech',
                    'IoT',
                  ].map((area, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Markets</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Industry 4.0',
                    'Healthcare',
                    'Financial Services',
                    'Semiconductors',
                    'Agriculture & Food',
                    'Mobility & Automotive',
                    'Digital Commerce',
                  ].map((market, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                      {market}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Offerings</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Product Development Support',
                    'Deep Tech Expertise and Labs',
                    'Business Mentorship',
                    'Startup School',
                    'Branding, Outreach & Visibility',
                    'Market & Funding Access',
                    'Patent Support',
                    'Office Space @ our Campus',
                  ].map((offering, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6">Eligibility Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2"></span>
                  <span>
                    If you have a strong technology idea in any of the focus areas mentioned above, a well thought out business model, clear vision for growth, then apply.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2"></span>
                  <span>
                    You could be at any stage – Idea, PoC, MVP, Revenue – does not matter. Apply.
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center mb-12">
              <p className="text-xl font-bold text-blue-900 mb-6">
                Application Deadline: Jan 31<sup>st</sup>, 2025
              </p>
              <a
                href="https://forms.gle/gE25xrgatkahVPCz6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Apply Now
              </a>
            </div>

            <div className="text-center text-gray-600">
              <p className="mb-4">
                For more information, please{' '}
                <a href="mailto:info.idrp@iiitdwd.ac.in" className="text-blue-900 hover:underline">
                  send us an email
                </a>
              </p>
              <p className="text-sm">
                By submitting the application, you consent to IIIT Dharwad Research Park using
                the information provided for program evaluation purposes and further
                communication related to the incubation process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Starter;
