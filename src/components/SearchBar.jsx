import React, { useState } from 'react';
import style from '../styles/SearchBar.module.css'

function SearchBar({ onSearch, onSearchPrice }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [min, setMin ] = useState('')
  const [max, setMax ] = useState('')

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setMax('')
    setMin('')
  };

  const handleMaxChange = (event) => {
    setMax(event.target.value)
    setSearchTerm('')
  }

  const handleMinChange = (event) => {
    setMin(event.target.value)
    setSearchTerm('')
  }

  const handleSearch = () => {
    setMax('')
    setMin('')
    onSearch(searchTerm);
  };

  const handleSearchPrice = () => {
    setSearchTerm('')
    onSearchPrice(min, max)
  }

  return (
    <div className={style.container}>
      <p>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      </p>
      <p>

      <input
        type="text"
        placeholder="Precio minimo..."
        value={min}
        onChange={handleMinChange}
        />
        <input
        type="text"
        placeholder="Precio maximo..."
        value={max}
        onChange={handleMaxChange}
        />
      <button onClick={handleSearchPrice}>Buscar</button>
        </p>
    </div>
  );
}

export default SearchBar;
