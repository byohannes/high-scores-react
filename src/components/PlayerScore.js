import React from 'react';

const PlayerScore = props => {
  return (
    <div>
      <span className="scorer-score-span">
        {props.element.s}
      </span>
    </div>
  );
};

export default PlayerScore;
