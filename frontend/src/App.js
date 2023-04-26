import Header from './components/Header'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { ApiEnum } from './components/enum/ApiEnum';

//import About from './About';
//import Contact from './Contact';

function App() {
  return (
   <Router>
         <div className="bg-background">

           <Header />
           <div className="bg-background mx-auto px-4 sm:px-6 lg:px-8 py-10">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/portfolio" element={<Portfolio />} />
             <Route path="/technical-blog" element={<Blog url={ApiEnum.GET_TECHNICAL_BLOG}/>} />
             <Route path="/personal-blog" element={<Blog url={ApiEnum.GET_PERSONAL_BLOG}/> } />
             <Route path="/contact" element={<Contact />} />
           </Routes>
           </div>
         </div>
    </Router>
  );
}

export default App;