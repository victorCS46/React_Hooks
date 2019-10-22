import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contributors(props) {
  const [repos, setRepos] = useState([]);
  let [i, setI] = useState(10);

  const loadMore = (e) => {
    e.preventDefault(e);
    setI((actual) => {
      return { i: actual.i + 5 };
    })
    if (i >= 25) {
      // document.getElementById("contributor_load").style.display = "none";
    }
  }

  useEffect(() => {
    console.log(props.location.state);
    const x = async () => {
      const response = await axios.get(`${props.location.state.repo}`);
      setRepos(response.data.repos);
      console.log(response.data);
    }
    x();
  })

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
    <div>{y}</div>
  );
}
export default Contributors;