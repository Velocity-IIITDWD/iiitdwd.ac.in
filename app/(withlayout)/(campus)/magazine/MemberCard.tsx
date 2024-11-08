import { memberStructure } from '@/data/magazine'

export default function MemberCard(member: memberStructure) {
  return (
    <div className="rounded text-dwd-primary bg-dwd-secondary2/30 p-2">
      <p className="font-bold">{member.name}</p>
      <p>{member.role}</p>
    </div>
  )
}