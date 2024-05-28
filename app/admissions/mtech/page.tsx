import Image from 'next/image';

export default function Page() {
  return <div className="flex justify-center items-center grow">
    <Image src="/images/work_in_progress.png" width={240} height={240} alt="work in progress" />
  </div>
}