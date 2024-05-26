import { Contact } from '@/data/contactInfo';
import { TableCell, TableRow } from '@/components/ui/table';

interface GetContactRowsProps {
  contactInfo: Contact[];
}
const GetContactRows = ({ contactInfo }: GetContactRowsProps) => {
  return contactInfo.map((contact) => (
    <TableRow key={contact.name}>
      <TableCell>{contact.name}</TableCell>
      <TableCell>{contact.designation}</TableCell>
      <TableCell>{contact.contactNumber}</TableCell>
    </TableRow>
  ));
};

export default GetContactRows;
