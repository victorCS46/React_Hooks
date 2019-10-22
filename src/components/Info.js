import React from 'react';
import { Route, Link} from 'react-router-dom';
import Contributors from './Contributors';

function Info(props){

    const x = props.items.map(item =>(
        <div key={item.id}>
            <div className="div-card">
                <div className="div-img"><img className="vcs-img" alt="No img" src={item.owner.avatar_url}></img></div>
                <div><label><b>{item.full_name}</b></label></div>
                <div><label className="vcs-language">{item.language}</label></div>
                <div className="vcs-description">{item.description}</div>
                <div>
                    <label className="vcs-issues">Issues: {item.open_issues}</label>
                    <label className="vcs-stars">Stars: {item.stargazers_count}</label>
                    <Link to={{ pathname: 'components/contributors/', state: { repo: item.contributors_url } }} className="vcs-contributor">Top Contributors</Link>
                    <Route path="/components/contributors" component={Contributors} />
                </div>
                <div className="vcs-repo"><a href={item.html_url} className="vcs-a">Go to repository</a></div>
            </div>
        </div>
    ));
    
    return(
        <div className="div_container">{x}</div>
        
    )
}
export default Info;