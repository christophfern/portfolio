import Header from './components/Header'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import TechnicalBlog from './components/TechnicalBlog';
import PersonalBlog from './components/PersonalBlog';
import Contact from './components/Contact';

//import About from './About';
//import Contact from './Contact';

function App() {
  return (
   <Router>
         <div>
           <div className="App"
           <Header />

           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/portfolio" element={<Portfolio />} />
             <Route path="/technical-blog" element={<TechnicalBlog />} />
             <Route path="/personal-blog" element={<PersonalBlog />} />
             <Route path="/contact" element={<Contact />} />
             {/* <Route path="/about" component={About} />
             <Route path="/contact" component={Contact} />*/}
           </Routes>
         </div>
    </Router>
  );
}

export default App;