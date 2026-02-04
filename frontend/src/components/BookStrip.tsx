import React from 'react'
import Image from 'next/image'

const books = [
  { title: 'The Night Watchman', author: 'Louise Erdrich', cover: '/covers/cover1.jpg' },
  { title: 'Klara and the Sun', author: 'Kazuo Ishiguro', cover: '/covers/cover2.jpg' },
  { title: 'The Vanishing Half', author: 'Brit Bennett', cover: '/covers/cover3.jpg' },
  { title: 'Project Hail Mary', author: 'Andy Weir', cover: '/covers/cover4.jpg' },
  { title: 'The Overstory', author: 'Richard Powers', cover: '/covers/cover5.jpg' },
  { title: 'Circe', author: 'Madeline Miller', cover: '/covers/cover6.jpg' },
]

const BookStrip = () => {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible md:justify-center">
          {books.map((b, i) => (
            <div
              key={i}
              className="w-40 shrink-0 bg-white/5 rounded-lg p-3 border border-white/6 hover:shadow-md transition"
            >
              <div className="relative w-full h-56 rounded-md overflow-hidden">
                <Image src={b.cover} alt={`${b.title} cover`} fill sizes="(max-width: 640px) 40vw, 160px" className="object-cover" />
              </div>
              <div className="mt-3">
                <div className="text-sm font-medium text-text-primary truncate">{b.title}</div>
                <div className="text-xs text-text-secondary truncate">{b.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookStrip