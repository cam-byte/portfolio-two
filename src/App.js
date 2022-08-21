import About from "./components/About"
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import React, { useState,useEffect } from 'react';
// import ClipLoader from "react-spinners/ClipLoader";
import Loader from "./components/Loader";



function App() {
  const [ loading,setLoading ] = useState(false);

  
  useEffect(()=>{
    // var element = document.querySelector(".app")
    // element.classList.add("loader")
    setLoading(true)
    setTimeout(() =>{
      // element.classList.remove("loader")
      setLoading(false)
    },3000)
  },[])
  return (
    <div className="app">
      {loading ? <Loader /> : 
       <><Navbar /><Home /><About /><Skills /><Work /><Contact /></> }
    </div>
  );
}

export default App;
