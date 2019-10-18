import React, {useState,} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Info from './components/Info';
import './App.css';

function App() {
  // const [states, setStates] = useState({
  //   search: '',
  //   items: [],
  //   submit: false,
  // })
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  
  const handleChange = (e) =>{
    e.preventDefault();
    // setStates({
    //   ...states,
    //   search: e.target.value
    // });
    setSearch(e.target.value);
    // console.log(search);
  } 

   const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await axios.get(`https://api.github.com/search/repositories?q=${/*states.*/search}&per_page=6`);
    // setStates({
    //   ...states,
    //   items: response.data,
    // });
    setItems(response.data.items);
    console.log(response.data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Que deseas buscar?" onChange={handleChange}/>
        <button className="vcs-btn">Search</button>
        {items ? <Info items={items}/>: ''}
        {/* {console.log(items)} */}
      </form>
    </div>
  );
}
export default App;