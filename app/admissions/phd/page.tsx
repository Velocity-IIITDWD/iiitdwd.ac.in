import Image from 'next/image';
import WIP from '@/assets/work_in_progress.png'

export default function Page() {
  return <div className="flex justify-center items-center grow">
    <Image src={WIP} width={240} height={240} alt="work in progress" />
  </div>
}