import React from 'react';
import { Calendar, Clock, Heart, MessageSquare, ExternalLink } from 'lucide-react';

const BlogCard = ({ blog }) => {
  const getDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <article className="group relative w-full overflow-hidden rounded-xl  transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl  dark:shadow-gray-900/30 sm:max-w-md lg:max-w-lg">
      {/* Image Container with Aspect Ratio */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
        <img
          src={blog.cover_image || blog.social_image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Top Actions */}
        <div className="absolute right-3 top-3 flex items-center gap-2">
          <button className="rounded-full bg-white/10 p-2 backdrop-blur-md transition-all hover:bg-white/20 dark:bg-black/30 dark:hover:bg-black/40">
            <ExternalLink size={18} className="text-white" />
          </button>
        </div>

        {/* Tags */}
        <div className="absolute bottom-4 flex w-full flex-wrap gap-2 px-4">
          {blog.tag_list.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/30 dark:bg-black/40 dark:hover:bg-black/50"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Title and Description */}
        <div className="mb-6">
          <h2 className="mb-3 text-2xl font-bold leading-tight text-gray-900 decoration-blue-500 decoration-2 transition-colors group-hover:underline dark:text-white">
            {blog.title}
          </h2>
          <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300 md:text-base">
            {blog.description}
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 dark:bg-gray-700/50">
            <Heart size={16} className="text-red-500" />
            <span>{blog.positive_reactions_count} reactions</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 dark:bg-gray-700/50">
            <MessageSquare size={16} className="text-blue-500" />
            <span>{blog.comments_count} comments</span>
          </div>
        </div>

      </div>
    </article>
  );
};

export default BlogCard;
