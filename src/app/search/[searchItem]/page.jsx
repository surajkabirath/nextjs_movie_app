
import Results from '@/components/Results';
import React from 'react'
const API_KEY = process.env.NEXT_APP_API_KEY;
const SearchPage = async({params}) => {
  const searchItem = params.searchItem
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchItem}&page=1&include_adult=false`,
    { next: { revalidate: 1000} }
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <Results results={results} />}
    </div>

  )
}

export default SearchPage