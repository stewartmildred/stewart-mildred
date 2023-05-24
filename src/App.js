import './App.css';
import Form from "./components/Form/form.js"
import Home from "./components/Home/home.js"
import Header from "./components/Header/header.js"
import Footer from "./components/Footer/footer.js"
import React from 'react';
import { Routes, Route }  from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <div>
     <Header/>
    </div>
    <div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/apply" element={<Form/>}/>
    </Routes>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
