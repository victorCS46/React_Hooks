import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [submit, setSubmit] = useState(false);
  
  const handleChange = (e) =>{
    e.preventDefault();
    setSearch(e.target.value);
    // console.log(search);
  } 

   const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await axios.get(`https://api.github.com/search/repositories?q=${search}&per_page=6`);
    setItems(response.data.items);
    console.log(response.data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Que deseas buscar?" onChange={handleChange}/>
        <button>Search</button>
      </form>
    </div>
  );
}
export default App;