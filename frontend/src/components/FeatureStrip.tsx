import React from 'react'

const features = [
  { title: 'Track Books', desc: 'Log reads and progress quickly', icon: '📚' },
  { title: 'Write Reviews', desc: 'Share short, helpful takes', icon: '✍️' },
  { title: 'Discover', desc: 'Personalized recommendations', icon: '🔎' },
  { title: 'Follow Friends', desc: 'See what they’re reading', icon: '👥' },
  { title: 'Create Lists', desc: 'Organize must-reads', icon: '📝' },
  { title: 'Stats & Goals', desc: 'Track habits & milestones', icon: '📈' },
]

const FeatureStrip = () => {
  return (
    <section className="bg-background py-6">
      <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <article
              key={i}
                className="w-full bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/6 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/20 text-primary text-xl">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{f.title}</h3>
                  <p className="text-xs text-text-secondary mt-1">{f.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureStrip