import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { SearchbarHeader, SearchForm } from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Enter a keyword');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarHeader className="searchbar">
      <SearchForm onSubmit={handleSubmit} className="form">
        <button type="submit" className="button">
          <span className="button-label">  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg></span>
        </button>

        <input
          onChange={handleQueryChange}
          value={searchQuery}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
}
