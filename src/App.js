import React, {useState} from 'react';
import Scoreboard from './components/ScoreBoard';
import allCountryScores from './components/Scores';
import './App.css';

const App = () => {
  const [scoreOrder, setScoreOrder] = useState ('High');

  const handleButtonClick = () => {
    scoreOrder === 'High' ? setScoreOrder ('Low') : setScoreOrder ('High');
  };

  return (
    <div className="App">
      <h1>High Scores per Country</h1>
      <button name="button" className="button" onClick={handleButtonClick}>
        {' '}{scoreOrder}
      </button>
      {allCountryScores
        .sort ((a, b) => a.name.localeCompare (b.name))
        .map ((element, index) => (
          <Scoreboard key={index} name={element.name} scores={element.scores} />
        ))}
    </div>
  );
};

export default App;
