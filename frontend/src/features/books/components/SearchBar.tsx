"use client"

import { useState } from "react"

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({onSearch}: SearchBarProps) => {
    const [query, setQuery] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const trimmed = query.trim();
        if (!trimmed) return;
        onSearch(trimmed);
    }
  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <input
            type="text"
            placeholder="Search by title, author,  or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent"
        />
        <button
            type="submit"
            className="rounded-full bg-accent px-4 py-3 text-sm font-semibold text-background transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
            Search
        </button>
    </form>
  )
}

export default SearchBar