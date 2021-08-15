import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [name, setName] = useState("");

  useEffect(() => {
    getInfo();
  },[])

  const getInfo = async () => {
    const response = await axios.get('/info');
    console.log(response);
    setName(response.data);
  }
  return (
    <div className="App">
      <h3>I am getting some info ...</h3>
      <p>{name}</p>
    </div>
  );
}

export default App;
