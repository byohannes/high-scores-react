import React from 'react';
import PlayerScore from './PlayerScore';
import PlayerName from './PlayerName';

const Scoreboard = props => {
  return (
    <div className="score-board">
      <div>
        <h1>HIGH SCORES: {props.name}</h1>
      </div>
      <div className="scorer-names-scores">
        <div className="score-list-name">
          {props.scores.map ((element, index) => (
            <PlayerName key={index} element={element} />
          ))}
        </div>
        <div className="score-list-score">
          {props.scores.map ((element, index) => (
            <PlayerScore key={index} element={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
