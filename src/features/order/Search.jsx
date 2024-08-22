import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        className="input w-full max-sm:w-16 max-sm:focus:w-24"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
