import React, {useState} from 'react';
import ScoreBoard from './components/ScoreBoard';
import allCountryScores from './components/Scores';
import './App.css';

const App = () => {
  const [country, setCountry] = useState(allCountryScores);
  const handleInput = (e) => {
    const findCountry = e.target.value.toLowerCase();
    setCountry(
      country.filter((item) => item.name.toLowerCase().includes(findCountry))
    );
  };

  return (
    <div className="container">
      <h1>High Scores per Country</h1>
      <input
        type="text"
        className="search"
        onChange={handleInput}
        placeholder="Search For A Country..."
      />

      {country
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((element, index) => (
          <ScoreBoard key={index} name={element.name} scores={element.scores} />
        ))}
    </div>
  );
};

export default App;
