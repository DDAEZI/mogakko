import youtubeData from './data/youtubeData.json';
import Layout from './components/shared/Layout';
import React, {useState} from 'react';
import Button from './Button.js';
import styles from './App.module.css';

function App() {
  const [value, setvalue] = useState(false);
  function onClick(){
    setvalue(value=>!value);
  }
  return (
    // <Layout>
    //   <div>콘텐츠!</div>
    // </Layout>
    <div className={styles.main}>
      <Button onClick={onClick} text="True or False"></Button>
      {value==true && <div className={styles.desc}>! TRUE !</div> }
      {value==false && <div className={styles.desc}>! FALSE !</div>}
    </div>
  );
}

export default App;