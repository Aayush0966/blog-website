'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FeaturedBlog from '@/components/FeaturedBlog';
import Categories from '@/components/Categories';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BlogsPage = () => {
  const [articleList, setArticleList] = useState([]);
  const [filteredArticleList, setFilteredArticleList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [tagList, setTagList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getArticles = async () => {
    const response = await fetch('https://dev.to/api/articles');
    const data = await response.json();
    setArticleList(data);
    setFilteredArticleList(data);
    getDifferentTags(data);
  };

  const toggleArticleList = (category) => {
    if (category === 'All') {
      setFilteredArticleList(articleList);
      return;
    }
    const regularPosts = articleList.filter(
      post => post.tag_list && post.tag_list.some(tag => tag.toLowerCase() === category.toLowerCase())
    );
    setFilteredArticleList(regularPosts);
  };

  const getDifferentTags = (articles) => {
    const allTags = articles.flatMap(post => post.tag_list || []);
    setTagList([...new Set(allTags)]);
  };

  const searchArticles = (query) => {
    setSearchQuery(query);
    const searchedPosts = articleList.filter(
      post => post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticleList(searchedPosts);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredArticleList.length / itemsPerPage);
  const currentItems = filteredArticleList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    getArticles();
  }, []);

  const handleClick = (blog) => {
    window.open(blog.url, '_blank')
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-300 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Latest Insights
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of articles, tutorials, and insights about web development,
            design, and technology.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => searchArticles(e.target.value)}
              className="pl-10 rounded-full border-gray-300 dark:border-gray-600"
            />
          </div>
          <Categories tags={tagList} toggleArticle={toggleArticleList} />
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {currentItems.map(post => (
            <FeaturedBlog handleClick={() => handleClick(post)} key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="text-center dark:text-white mt-12">
        <Pagination>
            <PaginationContent>
            {currentPage !== 1 && (
                <PaginationItem>
                <PaginationPrevious onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
                </PaginationItem>
            )}
            {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                <PaginationLink
                    onClick={() => setCurrentPage(index + 1)}
                    className={`
                     ${currentPage === index + 1 ? 'bg-blue-500 text-white font-bold' : ' '} 
                    px-4 py-2 rounded-md transition-colors duration-200 ease-in-out cursor-pointer
                    `}
                >
                    {index + 1}
                </PaginationLink>
                </PaginationItem>
            ))}
            {currentPage !== totalPages && (
                <PaginationItem>
                <PaginationNext  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
                </PaginationItem>
            )}
            </PaginationContent>
        </Pagination>
        </div>

      </div>
    </div>
  );
};

export default BlogsPage;
