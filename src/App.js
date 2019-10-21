import React, {useState,} from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import Info from './components/Info';
import './App.css';

function App() {

  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  let [inc, setInc] = useState(6);
  
  const handleChange = (e) =>{
    e.preventDefault();
    setSearch(e.target.value);
    // console.log(search);
  } 

   const handleSubmit = async (e) =>{
    e.preventDefault();
    if(inc > 6){
      setInc(inc = 6);
    }
    const response = await axios.get(`https://api.github.com/search/repositories?q=${search}&per_page=${inc}`);
    setItems(response.data.items);
    document.getElementById("load").style.display = "block";
    console.log(response.data);
  }

  const loadMore = async (e) =>{
    e.preventDefault(e);
    setInc(inc += 6);
    if(inc >= 60){
      setInc(inc = 60)
      document.getElementById("load").style.display = "none";
    }
    const response = await axios.get(`https://api.github.com/search/repositories?q=${search}&per_page=${inc}`);
    setItems(response.data.items);
    console.log(inc);
    console.log(response.data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Que deseas buscar?" onChange={handleChange}/>
        <button className="vcs-btn">Search</button>
        {items ? <Info items={items}/>: ''}
      </form>
      <form onSubmit={loadMore}>
        <center><button className="vcs-btn" id="load" type="submit">Load More...</button></center>    
      </form>
    </div>
  );
}
export default App;