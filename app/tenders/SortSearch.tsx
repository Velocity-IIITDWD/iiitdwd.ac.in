import {
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
  Search,
  X,
} from 'lucide-react';

import {
  Select,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { useRef, useState } from 'react';

type SortSearchProps = {
  selectedTab: string;
  active: Tender[];
  activeData: Tender[];
  archive: Tender[];
  archiveData: Tender[];
  setActiveData: React.Dispatch<React.SetStateAction<Tender[]>>;
  setArchiveData: React.Dispatch<React.SetStateAction<Tender[]>>;
};

const sortAttr = {
  'A-Z': 'title',
  'Publish Date': 'publishDate',
  'Recently Updated': 'updatedAt',
  'Submission Deadline': 'submissionDeadline',
};

export default function SortSearch({
  selectedTab,
  active,
  activeData,
  archive,
  archiveData,
  setActiveData,
  setArchiveData,
}: SortSearchProps) {
  const [sortAsc, setSortAsc] = useState(false);
  const [sortBy, setSortBy] = useState('Recently Updated');
  const [searchFor, setSearchFor] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const sortAndSetData = (sortBy: string, sortAsc: boolean, data: Tender[]) => {
    const setData = selectedTab === 'active' ? setActiveData : setArchiveData;
    const attr = sortAttr[sortBy as keyof typeof sortAttr] as keyof Tender;
    const multiplier = sortAsc ? 1 : -1;
    setData(
      [...data].sort((t1, t2) => multiplier * (t1[attr] >= t2[attr] ? 1 : -1))
    );
  };

  const onSortChange = (newSortBy: string, newSortAsc: boolean) => {
    setSortBy(newSortBy);
    setSortAsc(newSortAsc);
    const data = selectedTab === 'active' ? activeData : archiveData;
    sortAndSetData(newSortBy, newSortAsc, data);
  };

  const onSearchByChange = (value: string) => {
    if (value === searchFor) return;
    setSearchFor(value);
    let data = selectedTab === 'active' ? active : archive;
    if (value) {
      data = data.filter(
        (tender) =>
          tender.title.toLowerCase().includes(value) ||
          tender.documents.some((doc) =>
            doc.title.toLowerCase().includes(value)
          ) ||
          tender.corrections.some((cor) =>
            cor.title.toLowerCase().includes(value)
          )
      );
    }
    sortAndSetData(sortBy, sortAsc, data);
  };

  return (
    <div className="sm:bg-dwd-secondary1 sm:m-1 p-[1px] flex rounded-md text-sm text-white w-full sm:w-auto self-end sm:self-auto flex-col sm:flex-row gap-2 sm:gap-0 mb-2 md:mb-auto">
      <div className="flex p-1 gap-1 items-center justify-center  bg-dwd-secondary1 rounded-md w-full select-none">
        <div className="flex items-center justify-center pl-3">
          <span
            onClick={() => onSortChange(sortBy, !sortAsc)}
            className="cursor-pointer"
          >
            {sortAsc ? (
              <ArrowUpNarrowWide size={18} />
            ) : (
              <ArrowDownWideNarrow size={18} />
            )}
          </span>
          <Select
            defaultValue={sortBy}
            onValueChange={(newSortBy) => onSortChange(newSortBy, sortAsc)}
          >
            <SelectTrigger className="border-none focus:outline-none focus:shadow-none focus:ring-0 focus:ring-offset-0 h-auto py-0.5 px-1 w-36 text-white bg-dwd-secondary1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Recently Updated">
                  Recently Updated
                </SelectItem>
                <SelectItem value="Publish Date">Publish Date</SelectItem>
                <SelectItem value="Submission Deadline">Deadline</SelectItem>
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
          onChange={(event) =>
            onSearchByChange(event.target.value.toLowerCase())
          }
          ref={searchInputRef}
          className="text-dwd-secondary1 rounded-l-md p-1 px-2 focus:outline-none w-full sm:w-auto"
        />
        <span className="px-2 flex items-center justify-center">
          {searchFor ? (
            <X
              size={16}
              className="cursor-pointer"
              onClick={() => {
                onSearchByChange((searchInputRef.current!.value = ''));
              }}
            />
          ) : (
            <span title="type something to search" className="select-none">
              <Search size={16} />
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
