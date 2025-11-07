import React from 'react';
import ListItem from './ListItem';
import "./List.jsx";

const List = ({ repos }) => {
	return (
		<ul>
			{repos.map(repo => (
				<ListItem key={repo.id} repo={repo} />
			))}
		</ul>
	);
};

export default List;
