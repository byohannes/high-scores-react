import React from 'react';

const PlayerName = ({element}) => {
  return (
    <div>
      <span className="scorer-name">{element.n.toUpperCase()}</span>
    </div>
  );
};

export default PlayerName;
