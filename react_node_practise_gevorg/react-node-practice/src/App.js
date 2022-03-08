import React,{useState} from 'react';
import './App.css';
import RigthNavbar from './Components/RigthNavBar';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import TestDom from './Components/testDom';



function App() {

  const [colorData, setColorData] = useState("#e91e63")
  const [close, setClose] = useState(false) 
  const [backColor,setBackColor ] = useState("rgb(26, 27, 27)")
  const [fixed, setFixed] = useState(true)
  const [lightDark, setLightDark] = useState(true)

  console.log(close)

  return (
    <div className='app'>
   
  <RigthNavbar className = "rigthNavbar" colorData={colorData} setColorData={setColorData} 
               backColor={backColor} setBackColor={setBackColor}
               setFixed={setFixed} fixed={fixed}
               setLightDark={setLightDark}
               setClose={setClose} close={close}
               />
     <Routes>
       <Route path='/' element={<TestDom colorData ={colorData}  
       backColor={backColor} fixed={fixed}
       lightDark={lightDark}
       />}  />
     </Routes>
  
    </div>
  );
}

export default App;
