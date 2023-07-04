import React from 'react';
import { useTranslation } from 'react-i18next';

function Search({setSearch}) {
  const {t}= useTranslation() 
  return (
    <div className=' w-full flex  '>
      <input className='w-full outline-none border px-2 rounded' type='search' placeholder={t('Search...')} onChange={(e) => setSearch
      (e.target.value)}
      />
      <button className='px-8 py-2 bg-red-600 hover:bg-red-500 rounded text-white'>{t('Search')}</button>
    </div>
  );
}

export default Search;
// onChange={(e) => setSearch(e.target.value)}