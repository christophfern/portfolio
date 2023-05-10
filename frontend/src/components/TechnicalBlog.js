import React, { useState, useEffect } from 'react';
import testData from './test-data/blog-test-data.json';
import { apiUrl } from './config/Config';

function TechnicalBlog(props) {
     const [articles, setArticles] = useState([]);

     async function getArticles() {
      const response = await fetch(apiUrl(props.url));
      console.log(response);

      if (response.status === 200) {
        const jsonResponse = await response.json();
        setArticles(jsonResponse.articles);
      } else {
        console.error("Error with request");
        //TODO remove this
        setArticles(testData.articles);
      }
     }
     useEffect(() => {
        getArticles();
     }, []);

  function truncateArticle(content) {
    const firstXWords = content.split(' ');
    if (firstXWords.length > 100) {
        return firstXWords.slice(0,100).join(' ') + ' . . .';
    }
    return content;
  }

  return (
    <div className="bg-cardcolor rounded-lg shadow-lg py-12 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-header text-header mb-8 text-center">Technical Articles</h1>
        <div className="bg-accenta p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-header text-accent text-center mb-4">Welcome to the Personal Articles section</h2>
          <p className="text-body font-body">
            Here you will find a collection of Personal articles coverI'm ing a wide range of topics, from programming and
            web development to data science and artificial intelligence. Our authors are experts in their fields, and we
            strive to provide you with the latest insights and best practices to help you succeed in your projects and
            career.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl text-black font-bold mb-4 text-center">{article.title}</h2>
              <p className="text-black">{truncateArticle(article.content)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnicalBlog;
