'use client';
import React, { useState } from 'react';
import SearchDashboard from './_components/SearchDashboard';
import TemplateList from './_components/TemplateList';
const DashBoard = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />
      <TemplateList searchInput={searchInput} />
    </div>
  );
};

export default DashBoard;
