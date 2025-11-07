import React from 'react';
import "./List.css"

const ListItem = ({ repo }) => {
  return (
    <li>
      <h3><a href={repo.html_url}>{repo.name}</a></h3>
      <p>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
    </li>
  );
};

export default ListItem;
