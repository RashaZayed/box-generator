import React,{useState} from 'react';
import EnterColor from './Components/EnterColor'
import DisplayColor from './Components/DisplayColor'
import styles from './Components/styles.module.css'

import './App.css';

function App() {
  const [color , setColor] = useState('');
  // const [width , setWidth] = useState('');
  // const [height, setHeight]= useState('');
   const  [dimension ,setDimension] = useState({
     width: '',
     height: ''
   })
  return (
    <div>
      <EnterColor state={color} setState={setColor} dimension={dimension} setDimension={setDimension} />
       <DisplayColor state={color} dimension={dimension} /> 
       <DisplayColor state={color} dimension={dimension} /> 
       <DisplayColor state={color} dimension={dimension}/> 

    </div>
  );
}

export default App;
