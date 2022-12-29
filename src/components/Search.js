import React from 'react'

const Search = ({setSearch, setPage}) => {

    let searchBtn = (e) => {
        e.preventDefault();
      };

  return (
    <form className='mt-10 mb-8 flex space-x-4 w-full  justify-center'>
        <input onChange={e => {
          setPage(1);
          setSearch(e.target.value);
          }}
          placeholder='Search for Characters' type='text' className='border-2 border-sky-600 rounded-md p-2 focus:outline-none bg-transparent w-[40vw]'/>
        <button onClick={searchBtn} className='bg-sky-600 text-xl px-4 rounded-md text-white font-bold'>Search</button>
    </form>

  )
}

export default Search