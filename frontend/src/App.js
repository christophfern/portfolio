import Header from './components/Header'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import TechnicalBlog from './components/TechnicalBlog';

//import About from './About';
//import Contact from './Contact';

function App() {
  return (
   <Router>
         <div>
           <Header />

           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/portfolio" element={<Portfolio />} />
             <Route path="/technical-blog" element={<TechnicalBlog />} />
             {/* <Route path="/about" component={About} />
             <Route path="/contact" component={Contact} />*/}
           </Routes>
         </div>
    </Router>
  );
}

export default App;