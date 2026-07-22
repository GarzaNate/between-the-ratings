import React from 'react'
import Review from '../../books/components/Review'

const featuredReviews = [
  {
    reviewer: 'Maya J.',
    excerpt: 'A sleek review experience—simple, honest, and easy to browse. Finally, a place where I can share my thoughts without the noise.',
    rating: 4.5,
    bookTitle: 'The Night Watchman',
    bookAuthor: 'Louise Erdrich',
    source: 'Community review',
    date: 'June 10, 2026',
  },
  {
    reviewer: 'Alex R.',
    excerpt: 'Love how it focuses on the books, not the drama. Clean interface, thoughtful community. Exactly what I needed.',
    rating: 5,
    bookTitle: 'Klara and the Sun',
    bookAuthor: 'Kazuo Ishiguro',
    source: 'Verified reader',
    date: 'May 28, 2026',
  },
  {
    reviewer: 'Jordan T.',
    excerpt: 'The recommendations are spot-on. Discovered so many new authors through friends\' reviews. No algorithms, just real people.',
    rating: 4,
    bookTitle: 'The Vanishing Half',
    bookAuthor: 'Brit Bennett',
    source: 'Beta tester',
    date: 'April 15, 2026',
  },
]

const ReviewSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Featured Reviews</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See what readers are saying about their latest discoveries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredReviews.map((review, index) => (
            <Review
              key={index}
              reviewer={review.reviewer}
              excerpt={review.excerpt}
              rating={review.rating}
              bookTitle={review.bookTitle}
              bookAuthor={review.bookAuthor}
              source={review.source}
              date={review.date}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewSection