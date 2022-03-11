import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import styles from './Desc.module.css';
function App() {
  const[number, setNumber] = useState(0);

  function Add(){
    setNumber(number+1);
  }
  function Sub(){
    setNumber(number-1);
  }
  function Mul(){
    setNumber(number*2);
  }
  function Div(){
    setNumber(number/2);
  }
  function Reset(){
    setNumber(0);
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.num}>값 : {number}</h2>
      <div className={styles.btns}>
      <button className = {styles.btn} onClick = {Add}>+1</button>
      <button className = {styles.btn} onClick = {Sub}>-1</button>
      <button className = {styles.btn} onClick = {Mul}>*2</button>
      <button className = {styles.btn} onClick = {Div}>/2</button>
      <button className = {styles.btn} onClick = {Reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
