import ContactTable from '@/components/contactInfo/ContactTable';
import { contactCategories, contacts } from '@/data/contactInfo';
import { Metadata } from 'next';
const ContactInfo = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col p-2">
      <span className="text-dwd-primary text-4xl font-bold mb-4">
        Contact Information
      </span>
      <ContactTable
        contactInfo={contacts}
        contactCategories={contactCategories}
      />
    </div>
  );
};

export default ContactInfo;

export const metadata: Metadata = {
  title: 'Contact Info',
};
