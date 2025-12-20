import { useMemo } from 'react';
import { Card, SectionTitle } from '../ui';
import { getBlogPosts } from '../../constants/content';
import { getRelativeTimeAgo } from '../../utils/lunarCalendar';

export const BlogSection = () => {
  // Get blog posts with current dates
  const blogPosts = useMemo(() => getBlogPosts(), []);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-yellow-300">
        <SectionTitle>Latest News & Blogs</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((blog, index) => (
            <Card key={blog.id} delay={index * 0.1}>
              <article>
                <h3 className="text-xl font-medium text-orange-800 mb-2">
                  {blog.title}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <time
                    dateTime={blog.publishedDate.toISOString()}
                    className="text-sm text-orange-600"
                  >
                    {blog.date}
                  </time>
                  <span className="text-xs text-gray-500 bg-orange-100 px-2 py-1 rounded-full">
                    {getRelativeTimeAgo(blog.publishedDate)}
                  </span>
                </div>
                <p className="text-gray-600">{blog.excerpt}</p>
                <button className="mt-4 text-orange-500 hover:text-orange-700 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1">
                  Read More →
                </button>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
