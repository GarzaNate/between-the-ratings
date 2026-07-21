import React, { useState } from 'react'

// Need to create a search bar to test if API is working.

const DiscoverPage = () => {
    const [search, setSearch] = useState('');
  return (
    <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Discover</h1>

        <input 
            type="text"
            placeholder="Search for books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button 
            onClick={() => console.log(`Searching for: ${search}`)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            Search
        </button>
    </main>
  )
}

export default DiscoverPage