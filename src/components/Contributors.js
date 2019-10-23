import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contributors(props) {
  const [repos, setRepos] = useState([]);
  let [i, setI] = useState(10);

  const loadMore = (e) => {
    e.preventDefault(e);
    setI(i + 5);
    if (i >= 25) {
      document.getElementById("contributor_load").style.display = "none";
    }
    console.log(i);
  }

  useEffect(() => {
     const x = async () => {
     const response = await axios.get(`${props.location.state.repo}`);
     setRepos(response.data);
    }
    x();
  },[i])

  let y = repos.slice(0, i).map((item) =>
    <center key={item.id}>
      <div key={item.id} className="vcs-contributor_div">
        <div>
          <img className="vcs-con_img" src={item.avatar_url} alt="not found!!" />
        </div>
        <div className="vcs-con_name"><a href={item.html_url}>{item.login}</a></div>
        <div className="vcs-con_name">({item.contributions} Contributions)</div>
      </div>
    </center>
    );

  return (
    <div>
      <div className="header">
        <h1>Hooks Test</h1>
        <span>Github repositories search bar</span>
      </div>
      <div>{y}</div>
      <center>
        <form onSubmit={loadMore}> 
          <button id="contributor_load" className="vcs-btn">Load more</button>
        </form>
      </center>
    </div>
  );
}
export default Contributors;