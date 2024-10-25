'use client'

import React, {useState, useEffect} from 'react';
import { Amiko } from 'next/font/google';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/utils/blogsData';
import { ArrowDown } from 'lucide-react';

// Load the font
const amiko = Amiko({ weight: ['400', '600', '700'], subsets: ['latin'] });

function Home() {
  const [articleList, setArticleList] = useState([])
  const [popularArticle, setPopularArticle] = useState([])

  const getArticles = async () => {
    const response = await fetch('https://dev.to/api/articles');
    const data = await response.json();
    setArticleList(data);
  }

  const getPopularArticles = async () => {
    const response = await fetch('https://dev.to/api/articles/latest');
    const data = await response.json();
    setPopularArticle(data);
  }

  useEffect(() => {
   getArticles();
   getPopularArticles();
  }, []);


  return (
    <main className="min-h-screen bg-gradient-to-b  from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <header className={`${amiko.className} relative min-h-[70vh] flex flex-col items-center justify-center`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950 opacity-5"></div>
          <div className="absolute -inset-[10px] blur-3xl bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950 opacity-20"></div>
        </div>
        
        <div className="relative space-y-6 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
            THE BLOG
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Exploring the world of web development, one article at a time
          </p>
          <div className="animate-bounce mt-12">
            <ArrowDown className="mx-auto text-gray-400 dark:text-gray-500" size={32} />
          </div>
        </div>
      </header>

      <section className="max-w-9xl mx-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularArticle.slice(0,6).map(article => (
            <div key={article.id} className="flex">
              <BlogCard blog={article} />
            </div>
          ))}
        </div>
        </div>

      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-9xl mx-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            All Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articleList.slice(0,12).map(article => (
            <div key={article.id} className="flex">
              <BlogCard blog={article} />
            </div>
          ))}
        </div>

        
      </section>
    </main>
  );
}

export default Home;