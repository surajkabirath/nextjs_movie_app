"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className='flex justify-between px-5 max-w-6xl mx-auto'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search keywords...'
        className='w-full h-10 px-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='ml-2 px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 disabled:bg-gray-300 disabled:text-gray-400 focus:outline-none focus:ring-2 focus:bg-amber-500'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
