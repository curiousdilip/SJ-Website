"use client";
import { useState, useEffect } from "react";

export default function morePosts() {
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=subhashjha35",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error.message);
      }
    };

    fetchArticles();
  });

  return (
    <>
      <div>
        {Articles.map((article) => (
          <a className="blog" href={article.url} key={article.id}>
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
}
