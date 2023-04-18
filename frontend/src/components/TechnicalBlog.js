import React, { useState, useEffect } from 'react';
import testData from '../resources/testData.json';

function TechnicalBlog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    //    fetch("/api/get-technical-articles/v0")
    //      .then((res) => res.json())
    //      .then((data) => setArticles(data.articles))
    //      .catch((err) => console.log(err));
    setArticles(testData.articles);
  }, []);

  return (
    <div className="bg-primary-100 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Technical Articles</h1>
        <div className="grid grid-cols-1 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="bg-nature-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl text-secondary-900 font-bold mb-4 text-center">{article.title}</h2>
              <p className="text-secondary-700">{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnicalBlog;
