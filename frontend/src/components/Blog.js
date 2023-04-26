import React, { useState, useEffect } from 'react';
import testData from './test-data/blog-test-data.json';
import { ApiEnum } from './enum/ApiEnum';
import { apiUrl } from './config/Config';

function Blog(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
        fetch(apiUrl(props.url))
          .then((res) => res.json())
          .then((data) => setArticles(data.articles))
          .catch((err) => {
            console.log(err)
            setArticles(testData.articles)
         } );
    //setArticles(testData.articles);
  }, []);

  return (
    <div className="min-h-screen p-4 bg-cardcolor">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-header text-header mb-8 text-center">Personal Articles</h1>
        <div className="bg-accenta p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-header text-header text-center mb-4">Welcome to the Personal Articles section</h2>
          <p className="text-body font-body">
            Here you will find a collection of Personal articles covering a wide range of topics, from programming and
            web development to data science and artificial intelligence. Our authors are experts in their fields, and we
            strive to provide you with the latest insights and best practices to help you succeed in your projects and
            career.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl text-black font-bold mb-4 text-center">{article.title}</h2>
              <p className="text-black">{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
