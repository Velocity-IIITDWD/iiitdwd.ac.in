import Tenders from './Tenders';
import { active, archive } from '@/data/tenders';

export default function TendersPage() {
  return <Tenders active={active} archive={archive} />;
}
