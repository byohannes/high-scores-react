import React, {useState} from 'react';
import ScoreBoard from './components/ScoreBoard';
import allCountryScores from './components/Scores';
import './App.css';

const App = () => {
  const [allCountry, setAllCountry] = useState(allCountryScores);
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };
  const filteredData = allCountry.filter((item) =>
    item.name.toLowerCase().includes(input)
  );

  return (
    <div className="container">
      <h1>High Scores per Country</h1>
      <input
        type="text"
        className="search"
        onChange={handleInput}
        placeholder="Search For A Country..."
      />

      {filteredData
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((element, index) => (
          <ScoreBoard key={index} name={element.name} scores={element.scores} />
        ))}
    </div>
  );
};

export default App;
