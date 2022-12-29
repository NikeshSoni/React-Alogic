import React from 'react';
import './SCSS/App.scss';
import './SCSS/comman.scss';
import  Shop from './pages/shop';
import About from './pages/About';
import Soni from './pages/Support';
import More from './pages/More';

import { Routes , Route } from "react-router-dom";  

function App() {
  
  return (
            <div>
                    <Routes>
                        <Route index path="/" element= {<Shop />} />
                        <Route  path="/About" element= {<About />} />
                        <Route  path="/Support" element= {<Soni />} />
                        <Route  path="/More" element= {<More />} />
                    </Routes>
            </div>
       );
     }

export default App;
