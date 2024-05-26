'use client';
import { Contact, ContactData } from '@/data/contactInfo';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useEffect, useState } from 'react';
import GetContactRows from '@/components/contactInfo/GetContactRows';
import CreateTabs from '@/components/contactInfo/CreateTabs';

interface ContactTableProps {
  contactInfo: ContactData;
  contactCategories: string[];
}

const ContactTable = ({
  contactInfo,
  contactCategories,
}: ContactTableProps) => {
  const [contactTab, setContactTab] = useState('General Queries');
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(Object.entries(contactInfo)[0][1]);
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-6 md:border-b-0 w-full border md:border-none rounded-t-md bg-dwd-secondary2 md:bg-transparent border-black">
        <CreateTabs
          contactCategories={contactCategories}
          contactInfo={contactInfo}
          setContacts={setContacts}
          tab={contactTab}
          setTab={setContactTab}
        />
      </div>
      <div className="border border-black border-t-0 w-full">
        <Table className="text-slate-900 border-0">
          <TableHeader>
            <TableRow className="bg-dwd-secondary2 hover:bg-dwd-secondary1/40">
              <TableHead className="text-dwd-primary">Name</TableHead>
              <TableHead className="text-dwd-primary">Designation</TableHead>
              <TableHead className="text-dwd-primary">Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <GetContactRows contactInfo={contacts} />
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ContactTable;
