import Link from 'next/link';

export default function Page() {
  return (
    <div className="p-4 w-fit max-w-5xl">
      <p className="text-dwd-primary text-xl font-bold text-center mb-2">Admissions 2024</p>
      <div className="grid md:grid-cols-2 gap-2 ">
        <Link href='/admissions/btech' className="place-content-center group duration-100 hover:text-white p-2 rounded border-2 border-dwd-primary hover:bg-dwd-primary">
          <p className="text-dwd-primary group-hover:text-white mb-2 text-center font-bold">
            B.Tech.
          </p>
          <p className="text-sm">Computer Science and Engineering (C.S.E.)</p>
          <p className="text-sm">Electronics and Communications Engineering (E.C.E.)</p>
          <p className="text-sm">Data Science and Artificial Intelligence (D.S.A.I.)</p>
        </Link>
        <Link href='/admissions/phd' className="place-content-center group duration-100 hover:text-white p-2 max-md:order-2 rounded border-2 border-dwd-primary hover:bg-dwd-primary">
          <p className="text-dwd-primary group-hover:text-white text-center font-bold">Ph.D.</p>
        </Link>
        <Link href='/admissions/mtech' className="place-content-center group duration-100 hover:text-white p-2 md:col-span-2 rounded border-2 border-dwd-primary hover:bg-dwd-primary">
          <p className="text-dwd-primary group-hover:text-white text-center font-bold">M.Tech. Research</p>
        </Link>
      </div>
    </div>
  )
}