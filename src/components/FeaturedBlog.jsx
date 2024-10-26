import { Badge } from '@/components/ui/badge';
import { Clock, Eye } from 'lucide-react';
import { Card } from './ui/card';

const FeaturedBlog = ({ post, handleClick }) => {
    return (
      <Card onClick={handleClick}  className="relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
        <img
          src={post.cover_image || post.social_image}
          alt={post.title}
          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
          <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">{post.category}</Badge>
          <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
            {post.title}
          </h2>
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.reading_time_minutes}
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {post.public_reactions_count}
            </span>
          </div>
        </div>
      </Card>
    );
  };

  export default FeaturedBlog;