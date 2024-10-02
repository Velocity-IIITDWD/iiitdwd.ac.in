import Link from 'next/link';

<<<<<<< HEAD
    <div className="flex justify-center md:my-10  ">
      <div className="flex flex-col w-full md:w-11/12 bg-slate-200  rounded-md py-5 px-6 md:py-8 md:pl-9 md:pr-4">
        <div>
          <div className="text-dwd-primary text-xl font-bold">IIIT Dharwad offers Ph.D. program in Computer Science & Engineering, Data Science & Intelligent Systems, Electronics & Communication Engineering, Physics and Mathematics in the following categories:
          </div>
          <ol className="p-4">
            <li className="p-2">
              1. Regular (Full-time) - Institute fellowship or self-financed or Visvesvaraya PhD Scheme</li>
            <li className="p-2">
              2. Sponsored (Full-time or Part-time)</li>
            <li className="p-2">
              3. Part-time</li>
          </ol>
          <div className="my-4 text-lg font-semibold text-dwd-primary">
            •  Ph.D. in Computer Science and Engineering / Data Science and Intelligent Systems / Electronics and Communication Engineering
          </div>
          <p>
            To be eligible for , one of the following is a must:
          </p>
          <ol className="p-4">
            <li className="p-2">
              1. Master’s Degree in Engineering / Technology in relevant areas
            </li>
            <li className="p-2">
              2. B.E. / B.Tech. / M.Sc. / Technology or an equivalent degree, in relevant areas</li>
          </ol>
              B.E. / B.Tech. applicants with experience in a reputed R&D organization or a company, or those who have published papers in reputed conferences and journals, or patents are preferred.
          <div className="mt-10 mb-2   text-lg font-semibold text-dwd-primary">
            •  Ph.D. in Physics / Mathematics
          </div>
          <p className="pl-4 mb-8">
             Master’s Degree in relevant areas is a must.
          </p>
          <div className="font-bold mt-4 text-lg ">
            <p className="text-[#db4444] text-lg">
            The minimum eligibility criteria for the  Ph.D.  program are given below:
=======
export default function Page() {
  return (
    <div className="flex flex-col h-full w-full">
      <section className="w-full h-[50vh] bg-cover bg-center bg-[url('/images/LandingPage.png')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center">
        <p className="text-white z-[1] text-3xl font-bold">Ph.D.</p>
      </section>

      <div className="flex justify-center md:my-10  ">
        <div className="flex flex-col w-full md:w-11/12 bg-slate-200  rounded-md py-5 px-6 md:py-8 md:pl-9 md:pr-4">
          {/* New Rolling Advertisement for Ph.D. section */}
          <div className="mt-2 mb-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-dwd-primary mb-4">
              Rolling Advertisement for Admission to Ph.D.
            </h2>
            <p>
              IIIT Dharwad invites applications for admission to its Doctor of
              Philosophy (Ph.D.) programme. Prospective candidates can submit
              their applications at any time throughout the academic year, as
              the institute accepts applications on a rolling basis, under the
              following categories:
>>>>>>> 84f23c83f4594c79476949871c91cb843234897c
            </p>
            <ol className="p-4">
              <li className="p-2">
                1. Regular (Full-time) - Institute fellowship or self-financed
              </li>
              <li className="p-2">
                2. Part-time - External or College Teacher
              </li>
            </ol>
            <p>
              Note that applicants admitted under the 2nd category shall not
              receive any financial support from IIIT Dharwad. Applicants
              admitted under the 1st category may receive fellowship, subject to
              the availability of funds/grants. The final decision regarding
              admitting a candidate will be taken by the competent authority.
              For more information,{' '}
              <Link href="/docs/PhD.Admissions-Rolling-Advertisement.pdf" className='text-blue-500'>
                please click here
              </Link>
              .
            </p>

            <a
              href="https://forms.gle/UNH8K8PUwsg9dVGH6"
              className="text-blue-600 underline"
            >
              Link for Application Form
            </a>
            <p className="mt-4">
              Application submission is open throughout the year. Shortlisted
              candidates will be intimated about further process, date, and time
              over email.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-bold">Contact Information</h3>
              <p>
                Professor In-Charge (Academics)
                <br />
                IIIT Dharwad, Ittigatti Road, Near Sattur Colony, Dharwad
                -580009
                <br />
                Email: pic-ac@iiitdwd.ac.in
              </p>
            </div>
          </div>
          <div>
            {/* <div className="text-dwd-primary text-xl font-bold">
              IIIT Dharwad offers Ph.D. program in Computer Science &
              Engineering, Data Science & Intelligent Systems, Electronics &
              Communication Engineering, Physics and Mathematics in the
              following categories:
            </div>
            <ol className="p-4">
              <li className="p-2">
                1. Regular (Full-time) - Institute fellowship or self-financed
                or Visvesvaraya PhD Scheme
              </li>
              <li className="p-2">2. Sponsored (Full-time or Part-time)</li>
              <li className="p-2">3. Part-time</li>
            </ol>
            <div className="my-4 text-lg font-semibold text-dwd-primary">
              • Ph.D. in Computer Science and Engineering / Data Science and
              Artificial Intelligence / Electronics and Communication
              Engineering
            </div>
            <p>To be eligible for admission, one of the following is a must:</p>
            <ol className="p-4">
              <li className="p-2">
                1. Master’s Degree in Engineering / Technology in relevant areas
              </li>
              <li className="p-2">
                2. B.E. / B.Tech. / M.Sc. / Technology or an equivalent degree,
                in relevant areas
              </li>
            </ol>
            B.E. / B.Tech. applicants with experience in a reputed R&D
            organization or a company, or those who have published papers in
            reputed conferences and journals, or patents are preferred.
            <div className="mt-10 mb-2   text-lg font-semibold text-dwd-primary">
              • Ph.D. in Physics / Mathematics
            </div>
            <p className="pl-4 mb-8">
              Master’s Degree in relevant areas is a must.
            </p>
            <div className="font-bold mt-4 text-lg ">
              <p className="text-[#db4444] text-lg">
                The minimum eligibility criteria for the Ph.D. program are given
                below:
              </p>
              <div className="mx-auto my-9 text-md font-normal">
                <table className="border-collapse border border-gray-400 mx-auto">
                  <thead>
                    <tr>
                      <th className="border bg-gray-300 border-gray-400 px-4 py-2">
                        Category
                      </th>
                      <th className="border bg-gray-300  border-gray-400 px-4 py-2">
                        Minimum CGPA / CPI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-[390px] border  border-gray-400 px-4 py-2">
                        General / OBC
                      </td>
                      <td className="w-[390px] border  border-gray-400 px-4 py-2">
                        6.0
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[390px] border  border-gray-400 px-4 py-2">
                        SC/ST/ PwD
                      </td>
                      <td className="w-[390px] border  border-gray-400 px-4 py-2">
                        {' '}
                        5.5
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-2xl text-center">or</div>
              <div className="mx-auto my-9 text-md font-normal">
                <table className="border-collapse border border-gray-400 mx-auto">
                  <thead>
                    <tr>
                      <th className="border bg-gray-300 border-gray-400 px-4 py-2">
                        Category
                      </th>
                      <th className="border bg-gray-300 border-gray-400 px-4 py-2">
                        Minimum Percentage of Aggregate Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-[390px] border  border-gray-400 px-4 py-2">
                        General / OBC
                      </td>
                      <td className="w-[390px] border  border-gray-400 px-4 py-2">
                        60%
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[390px] border  border-gray-400 px-4 py-2">
                        SC/ST/ PwD
                      </td>
                      <td className="w-[390px] border  border-gray-400 px-4 py-2">
                        55%{' '}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> 
            <div className="my-4">
              Areas of Research interests include Computer Science and
              Engineering, Data Science and Artificial Intelligence, Electronics
              and Communication Engineering, Physics and Mathematics
              encompassing the following areas, but not limited to: Blockchain,
              Cloud Computing and Security, Coding Theory, Computer Networks,
              Computer Vision and Image Processing, Natural Language Processing,
              Parallel Computing, Speech Processing, Data Analytics, Internet of
              Things, Machine Learning, Deep Learning, Optimization, Signal
              Processing, Soft Computing, Social Networks, Physics, Quantum
              Computing, Mathematics and Statistics
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
