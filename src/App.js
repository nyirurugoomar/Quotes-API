import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] =useState('')
  const [author, setAuthor]= useState('')
  const getQuote =()=>{
    axios.get('https://api.quotable.io/random')
    .then(res =>{
      console.log(res.data.content)
      console.log(res.data.author )

       setQuote(res.data.content)
       setAuthor(res.data.author)
    }).catch(err =>{
      console.log(err)
    })
  }
  return (
    <div className="App">
      <button onClick={getQuote}>Get quote</button>
      { quote ?<p>{quote}</p> : null}
      <h4>{author}</h4>
    </div>
  );
}

export default App;
