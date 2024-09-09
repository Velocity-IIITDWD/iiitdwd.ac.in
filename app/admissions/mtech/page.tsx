import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-full w-full">
      <section className="w-full h-[50vh] bg-cover bg-center bg-[url('/images/LandingPage.png')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center">
        <p className="text-white z-[1] text-3xl font-bold">M.Tech. Research</p>
      </section>
      <div className="flex justify-center md:my-10">
        <div className="flex flex-col w-full md:w-11/12 bg-slate-200 rounded-md py-5 px-6 md:py-8 md:pl-9 md:pr-4">
          <div>
            <div className="text-dwd-primary text-lg md:text-xl font-bold">
              IIIT Dharwad offers M. Tech. (Research) program in Computer Science & Engineering, Data Science & Intelligent Systems and Electronics & Communication Engineering in the following categories:
            </div>
            <ol>
              <li className="p-4">1. Regular (Full-time) - Institute fellowship or self-financed</li>
              <li className="p-4">2. Part-time - External or College Teacher</li>
            </ol>
            <div className="mt-4">
              The minimum requirement is a B.E. / B.Tech. / M.Sc. / M.C.A. or equivalent for IT/Engineering disciplines with a valid score in an entrance examination such as GATE/NET or national level selection process conducted by IIIT Dharwad or any other national level examination.
            </div>
            <div className="font-bold mt-4 text-lg text-dwd-primary">
              <p className="text-[#db4444] text-lg">
                The minimum eligibility criteria for the M. Tech. program are given below:
              </p>
              <div className="mx-auto my-9 text-md font-normal">
                <table className="border-collapse border border-gray-400 mx-auto">
                  <thead>
                    <tr>
                      <th className="border bg-gray-300 border-gray-400 px-4 py-2">Category</th>
                      <th className="border bg-gray-300 border-gray-400 px-4 py-2">Minimum CGPA / CPI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-[390px] border border-gray-400 px-4 py-2">General / OBC</td>
                      <td className="w-[390px] border border-gray-400 px-4 py-2">6.5</td>
                    </tr>
                    <tr>
                      <td className="w-[390px] border border-gray-400 px-4 py-2">SC/ST/ PwD</td>
                      <td className="w-[390px] border border-gray-400 px-4 py-2">6.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-2xl text-center">or</div>
              <div className="mx-auto my-9 text-md font-normal">
                <table className="border-collapse border border-gray-400 mx-auto">
                  <thead>
                    <tr>
                      <th className="border bg-gray-300 border-gray-400 px-4 py-2">Category</th>
                      <th className="border bg-gray-300 border-gray-400 px-4 py-2">Minimum Percentage of Aggregate Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-[390px] border border-gray-400 px-4 py-2">General / OBC</td>
                      <td className="w-[390px] border border-gray-400 px-4 py-2">60%</td>
                    </tr>
                    <tr>
                      <td className="w-[390px] border border-gray-400 px-4 py-2">SC/ST/ PwD</td>
                      <td className="w-[390px] border border-gray-400 px-4 py-2">55%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="my-4">
              Areas of Research interests include Computer Science and Engineering, Data Science and Artificial Intelligence, Electronics and Communication Engineering but not limited to: Blockchain, Cloud Computing and Security, Coding Theory, Computer Networks, Computer Vision and Image Processing, Natural Language Processing, Parallel Computing, Speech Processing, Data Analytics, Internet of Things, Machine Learning, Deep Learning, Optimization, Signal Processing, Soft Computing, Social Networks, Physics, Quantum Computing, Mathematics and Statistics.
            </div>
          </div>

          {/* Rolling Advertisement Section */}
          <div className="mt-8 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-dwd-primary text-lg md:text-xl font-bold">Rolling Advertisement for Admission to M. Tech. (by Research)</h2>
            <p className="mt-4">
              IIIT Dharwad invites applications for admission to its M.Tech by Research programme. Prospective candidates can submit their applications at any time throughout the academic year, as the institute accepts applications on a rolling basis, under the following categories:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Regular (Full-time) - Institute fellowship or self-financed</li>
              <li>Part-time - External or College Teacher</li>
            </ul>
            <p className="mt-4">
              Note that applicants admitted under the 2nd category shall not receive any financial support from IIIT Dharwad. Applicants admitted under the 1st category may receive fellowship, subject to the availability of funds/grants. The final decision regarding admitting a candidate will be taken by the competent authority. For more information, please refer to the <Link href="/docs/M.Tech(R)-Admission-Rolling-Advertisement.pdf" className="text-blue-600 underline">attached document</Link>.
            </p>
            <p className="mt-4">
              <a href="https://forms.gle/UNH8K8PUwsg9dVGH6" className="text-blue-600 underline">Link for Application Form</a>
            </p>
            <p className="mt-4">
              Application submission is open throughout the year. Shortlisted candidates will be intimated about further process, date and time over email.
            </p>
            <div className="mt-4">
              <h3 className="font-bold">Contact Information</h3>
              <p>Professor In-Charge (Academics)</p>
              <p>IIIT Dharwad, Ittigatti Road, Near Sattur Colony, Dharwad -580009</p>
              <p>Email: <a href="mailto:pic-ac@iiitdwd.ac.in" className="text-blue-600 underline">pic-ac@iiitdwd.ac.in</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
