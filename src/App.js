import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Headline from './components/headline/headline';

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline header="Post" desc="Click the button to render"/>
      </section>
    </div>
  );
}

export default App;
