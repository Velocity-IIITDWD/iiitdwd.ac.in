import { ArrowDownWideNarrow, Search } from 'lucide-react';

import {
  Select,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';

export default function SortSearch() {
  return (
    <div className="sm:bg-dwd-secondary1 sm:m-1 p-[1px] flex rounded-md text-sm text-white w-full sm:w-auto self-end sm:self-auto flex-col sm:flex-row gap-2 sm:gap-0 mb-2 md:mb-auto">
      <div className="flex p-1 gap-1 items-center justify-center  bg-dwd-secondary1 rounded-md w-full">
        <div className="flex items-center justify-center pl-3">
          <ArrowDownWideNarrow size={18} />
          <Select defaultValue="Recently Updated" onValueChange={() => {}}>
            <SelectTrigger className="border-none focus:outline-none focus:shadow-none focus:ring-0 focus:ring-offset-0 h-auto py-0.5 px-1 w-44 text-white bg-dwd-secondary1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Recently Updated">
                  Recently Updated
                </SelectItem>
                <SelectItem value="Publish Date">Publish Date</SelectItem>
                <SelectItem value="Submission Deadline">
                  Submission Deadline
                </SelectItem>
                <SelectItem value="A-Z">A-Z</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex bg-dwd-secondary1 border-2 border-dwd-secondary1 rounded-md sm:border-0">
        <input
          type="text"
          placeholder="Search"
          className="text-dwd-secondary1 rounded-l-md p-1 px-2 focus:outline-none w-full sm:w-auto"
        />
        <span className="px-2 flex items-center justify-center">
          <Search size={16} className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
}
