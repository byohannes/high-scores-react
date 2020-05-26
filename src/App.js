import React from 'react';
import ScoreBoard from './components/ScoreBoard';
import allCountryScores from './components/Scores';
import './App.css';

const App = () => {
  
  return (
    <div className="container">
      <h1>High Scores per Country</h1>
     
      {allCountryScores
        .sort ((a, b) => a.name.localeCompare (b.name))
        .map ((element, index) => (
          <ScoreBoard key={index} name={element.name} scores={element.scores} />
        ))}
    </div>
  );
};

export default App;
