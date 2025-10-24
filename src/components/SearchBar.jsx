import { useState } from 'react'
import './SearchBar.css'

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleInputChange = (event) => {
    const value = event.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Buscar productos típicos..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  )
}