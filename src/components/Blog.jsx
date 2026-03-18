import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n';
import cv from '../data/cv';
import './Blog.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Blog() {
  const { t, localize } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);

  if (!cv.blog || cv.blog.length === 0) return null;

  return (
    <section id="blog" className="section">
      <motion.h2
        className="section-title gradient-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('blog.title')}
      </motion.h2>

      <div className="blog__grid">
        {cv.blog.map((post, i) => {
          const isExpanded = expandedId === post.id;
          return (
            <motion.article
              key={post.id}
              className="blog-card"
              style={{ '--accent': post.color }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="blog-card__top-border" />
              <div className="blog-card__meta">
                <span className="blog-card__date mono">{post.date}</span>
                <span className="blog-card__read-time">
                  {post.readTime} {t('blog.minRead')}
                </span>
              </div>

              <h3 className="blog-card__title">{localize(post.title)}</h3>
              <p className="blog-card__excerpt">{localize(post.excerpt)}</p>

              <div className="blog-card__tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-card__tag">{tag}</span>
                ))}
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="blog-card__content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className="blog-card__content-inner">
                      {localize(post.content)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className="blog-card__toggle"
                onClick={() => setExpandedId(isExpanded ? null : post.id)}
              >
                {isExpanded ? t('blog.readLess') : t('blog.readMore')}
              </button>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
