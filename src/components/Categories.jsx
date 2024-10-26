'use client'

import { Button } from "./ui/button";
import { useState } from "react";

const Categories = ({toggleArticle, tags}) => {
    const categories = ['All', ...new Set(tags)];
    const [activeCategory, setActiveCategory] = useState("All");
  

    const handleToggleArticle = (category) => {
        setActiveCategory(category)
        toggleArticle(category);
    }

    return (
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => handleToggleArticle(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
    );
  };

  export default Categories;