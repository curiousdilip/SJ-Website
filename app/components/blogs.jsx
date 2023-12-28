// Blogs.js

"use client";
import { useState, useEffect } from "react";
import { fetchDevToBlogs } from "../api/api";

const Blogs = ({ maxBlogs }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDevToBlogs();
      setBlogs(data);
    };

    fetchData();
  }, []);

  const displayedBlogs = maxBlogs ? blogs.slice(0, maxBlogs) : blogs;

  return (
    <>
      <div className="posts">
        {displayedBlogs.map((article) => (
          <a
            className="post"
            href={article.url}
            key={article.id}
            target="_blank"
          >
            <h2>{article.title}</h2>
            <div className="archive">
              <p className="date">{article.readable_publish_date}</p>
              <div className="seperator"></div>
              <p className="tags">{article.tags}</p>
            </div>
            <p className="excerpt">{article.description}</p>
          </a>
        ))}
      </div>
    </>
  );
};

export default Blogs;
