import Header from './components/Header'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import PersonalBlog from './components/PersonalBlog';
import TechnicalBlog from './components/TechnicalBlog';
import Contact from './components/Contact';
import { ApiEnum } from './components/enum/ApiEnum';

//import About from './About';
//import Contact from './Contact';

function App() {
  return (

   <Router>


       <Header />
       <div className="bg-background mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/technical-blog" element={<TechnicalBlog url={ApiEnum.GET_TECHNICAL_BLOG}/>} />
         <Route path="/personal-blog" element={<PersonalBlog url={ApiEnum.GET_PERSONAL_BLOG}/> } />
         <Route path="/contact" element={<Contact />} />
       </Routes>
       </div>

    </Router>
  );
}

export default App;