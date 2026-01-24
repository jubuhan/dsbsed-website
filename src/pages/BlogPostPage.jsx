import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react'
import { blogPosts } from '../data/blogData'

const BlogPostPage = () => {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF6B35] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] rounded-2xl overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>
        </motion.div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FB923C] text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href
                  })
                }
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-[#FF6B35] transition-colors ml-auto"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-black prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#FF6B35] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-black prose-strong:font-semibold
              prose-ul:text-gray-700 prose-ul:my-6
              prose-li:my-2
              prose-code:text-[#FF6B35] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-gray-600" />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#FF6B35] transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-[#FF6B35] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Let's turn your ideas into reality with our expert team.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FB923C] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage
