import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);