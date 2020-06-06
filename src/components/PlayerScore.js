import React from 'react';

const PlayerScore = ({element}) => {
  return (
    <div>
      <span className="scorer-score">{element.s}</span>
    </div>
  );
};

export default PlayerScore;
