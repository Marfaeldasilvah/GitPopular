import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import "./Section.css";

const Section = () => {
	const [repos, setRepos] = useState([]);
	const [language, setLanguage] = useState('Todos');

	const languages = ['Todos', 'JavaScript', 'Python', 'Go', 'Ruby', 'Java', 'Nix'];

	useEffect(() => {
		const fetchRepos = async () => {
			let url = 'https://api.github.com/search/repositories?q=stars:>=10000&sort=stars&order=desc&per_page=28';
			if (language !== 'Todos') {
				url = `https://api.github.com/search/repositories?q=stars:>=10000+language:${language}&sort=stars&order=desc&per_page=28`;
			}
			try {
				const response = await axios.get(url);
				setRepos(response.data.items);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchRepos();
	}, [language]);

	return (
		<section>
			<div className="section-div">
				{languages.map(lang => {
					const classes = ['lang-button'];

					if (language === lang) {
						classes.push('active-button');
					}
					if (language === "Ruby") {
						classes.push('ruby');
					}
					if (language === "JavaScript") {
						classes.push("JavaScript");
					}
					if (language === "Python") {
						classes.push("Python");
					}
					if (language === "Go") {
						classes.push("Go");
					}

					if (language === "Java") {
						classes.push("Java");
					}

					if (language === "Nix") {
						classes.push("Nix");
					}

					if (language === "Todos") {
						classes.push("Todos");
					}

					return (
						<button
							key={lang}
							onClick={() => setLanguage(lang)}
							className={classes.join(' ')}>
							{lang}
						</button>
					);
				})}
			</div>
			<List repos={repos} />
		</section>
	);
};

export default Section;
