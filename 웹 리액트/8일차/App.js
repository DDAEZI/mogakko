import youtubeData from './data/youtubeData.json';
import Layout from './components/shared/Layout';
import React, {useState} from 'react';
import Button from './Button.js';
import styles from './App.module.css';

function App() {
  const [value, setvalue] = useState(false);
  function onClick(){
    setvalue(value=>!value);
    const change = document.getElementById("change");
    if(change.style.color=="white"){
      change.style.color = "blue";
    }
    else{
    change.style.color = "white";
    }
    }
  return (
    <div className={styles.main} id="ch">
      <Button onClick={onClick} text="True or False"></Button>
      <div className={styles.change} id="change">
      {value? "! TRUE !" : "! FALSE !"} </div>
    </div>
  );
}


export default App;