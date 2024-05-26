import { Contact, ContactData } from '@/data/contactInfo';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Value } from '@radix-ui/react-select';

interface CreateTabsProps {
  tab: string;
  contactCategories: string[];
  contactInfo: ContactData;
  setContacts: (contact: Contact[]) => void;
  setTab: (tabIndex: string) => void;
}
const CreateTabs = ({
  tab,
  contactCategories,
  contactInfo,
  setContacts,
  setTab,
}: CreateTabsProps) => {
  const setCategory = (category: string) => {
    setTab(category);
    Object.entries(contactInfo).forEach((index) => {
      if (
        index[0].toLowerCase() == category.split(' ').join('').toLowerCase()
      ) {
        setContacts(index[1]);
      }
    });
  };

  return (
    <>
      {
        <Select onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-full col-span-6 border-none focus:outline-none text-dwd-primary bg-dwd-secondary2 focus:shadow-none focus:ring-0 md:hidden focus:ring-offset-0">
            <SelectValue placeholder="General Queries" />
          </SelectTrigger>
          <SelectContent
            className="shadow-none border-1 -inset-x-0.5 -inset-y-1 rounded-none border-dwd-primary rounded-b-sm md:hidden"
            side="bottom"
          >
            {contactCategories.map((category) => {
              return (
                <SelectItem key={category} value={category} className="py-3 ">
                  {category}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      }
      {contactCategories.map((category) => {
        return (
          <div
            key={category}
            className={`${
              tab === category &&
              'bg-dwd-secondary2 border border-slate-900 border-b-0 border-b-dwd-secondary2'
            } text-dwd-primary flex-1 cursor-pointer border-b border-b-slate-700 justify-center rounded-t-lg py-3 text-center hidden md:flex`}
            onClick={() => setCategory(category)}
          >
            {category}
          </div>
        );
      })}
    </>
  );
};

export default CreateTabs;
