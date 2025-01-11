import React, { SetStateAction } from 'react';
import { SearchIcon } from 'lucide-react';
import { Auth } from '@/components/Auth';
import Categories from './Categories';

const categories = [
  {
    name: 'All',
    value: 'All',
  },
  {
    name: 'Youtube',
    value: 'Youtube',
  },
  {
    name: 'Instagram',
    value: 'Instagram',
  },
  {
    name: 'Tiktok',
    value: 'Tiktok',
  },
  {
    name: 'Linkedin',
    value: 'Linkedin',
  },
  {
    name: 'Tweet',
    value: 'Tweet',
  },
];

const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="mx-5 py-2 ">
      <div className="flex flex-col md:flex-row gap-2 mt-5 py-6 px-4 bg-white rounded">
        <div className="flex gap-2 items-center rounded-full border bg-white p-2 w-full md:w-[20%] ">
          <SearchIcon />
          <input
            onChange={(e) => onSearchInput(e.target.value)}
            type="text"
            className="bg-transparent outline-none text-black"
            placeholder="Search..."
          />
        </div>
        <div className="flex-1 flex justify-end items-center gap-6">
          <Categories items={categories} />
        </div>
        <div className="ml-auto">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default SearchDashboard;
