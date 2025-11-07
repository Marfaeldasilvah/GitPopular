import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import "./List.css"

const Section = () => {
  const [repos, setRepos] = useState([]);
  const [language, setLanguage] = useState('Todos');

  const languages = ['Todos', 'JavaScript', 'Python', 'Go', 'Ruby', 'Java'];

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
      <div>
        {languages.map(lang => (
          <button key={lang} onClick={() => setLanguage(lang)}>
            {lang}
          </button>
        ))}
      </div>
      <List repos={repos} />
    </section>
  );
};

export default Section;
