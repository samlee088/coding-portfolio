import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import 'animate.css';



export default function App() {
  // const [onOff, setOnOff] = useState(true)
  //   return (
  //     <>
  //    {onOff ? (<XyzTransition appear duration="auto">
  //       <div className="page-wrap">
  //         <Navigation setOnOff={setOnOff}/>
  //       </div>
  //       </XyzTransition>)
  //       : ( <div className="page-wrap">
  //         <Navigation setOnOff={setOnOff}/>
  //       </div>)
  //    }
  //     </>
    return (
    
    
        <div className="page-wrap">
          <Navigation/>
        </div>
      
      
    
    );
  }

