import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Headline from './components/headline/headline';

const tempArr = [
  {
    fName: "Joe",
    age: 22,
    onlineStatus: true
  }
]

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline header="Post" desc="Click the button to render" tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
