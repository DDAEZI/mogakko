import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Button from './Button';
import Layout from './Layout';

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
    setNumber(1);
  }
  return (
    <Layout>
      <div>{number} * 1 = {number*1}</div>
      <div>{number} * 2 = {number*2}</div>
      <div>{number} * 3 = {number*3}</div>
      <div>{number} * 4 = {number*4}</div>
      <div>{number} * 5 = {number*5}</div>
      <div>{number} * 6 = {number*6}</div>
      <div>{number} * 7 = {number*7}</div>
      <div>{number} * 8 = {number*8}</div>
      <div>{number} * 9 = {number*9}</div>
      <div className="box">
      <Button onClick={Add} text="+1" />
      <Button onClick={Sub} text="-1" />
      <Button onClick={Mul} text="*2" />
      <Button onClick={Div} text="/2" />
      <Button onClick={Reset} text="Reset" />
      </div>
    </Layout>
  );
}

export default App;
