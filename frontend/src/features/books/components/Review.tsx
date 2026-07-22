import React from 'react'

type ReviewProps = {
  reviewer: string
  excerpt: string
  rating?: number
  bookTitle?: string
  bookAuthor?: string
  source?: string
  date?: string
  className?: string
}

const Review = ({
  reviewer,
  excerpt,
  rating,
  bookTitle,
  bookAuthor,
  source = 'Reader review',
  date,
  className = '',
}: ReviewProps) => {
  const normalizedRating = rating ? Math.max(0, Math.min(5, rating)) : undefined
  const stars = normalizedRating
    ? Array.from({ length: 5 }, (_, index) =>
        index < Math.round(normalizedRating)
          ? '★'
          : '☆'
      ).join('')
    : null

  return (
    <article
      className={`group bg-white/5 border border-white/6 rounded-4xl p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">{source}</p>
          <h3 className="mt-3 text-2xl font-semibold text-text-primary">{reviewer}</h3>
          {bookTitle ? (
            <p className="mt-2 text-sm text-text-secondary">
              {bookTitle}
              {bookAuthor ? <span className="text-text-muted"> — {bookAuthor}</span> : null}
            </p>
          ) : null}
        </div>

        {stars ? (
          <div className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-primary ring-1 ring-white/10">
            <div className="mb-1 text-lg">{stars}</div>
            <div className="text-xs text-text-secondary">{normalizedRating?.toFixed(1)} / 5</div>
          </div>
        ) : null}
      </div>

      <p className="mt-6 text-sm leading-7 text-text-secondary">{excerpt}</p>

      {date ? (
        <div className="mt-6 text-xs text-text-muted">{date}</div>
      ) : null}
    </article>
  )
}

export default Review