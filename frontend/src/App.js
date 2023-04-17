import Header from './components/Header'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
//import About from './About';
//import Contact from './Contact';

function App() {
  return (
   <Router>
         <div>
           <Header />
           <Home />
           <Routes>

            {/* <Route path="/" component={HomePage} />
             <Route path="/about" component={About} />
             <Route path="/contact" component={Contact} />*/
            }
           </Routes>
         </div>
    </Router>
  );
}

export default App;