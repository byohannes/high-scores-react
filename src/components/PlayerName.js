import React from 'react';

const PlayerName = props => {
  return (
    <div>
      <span className="scorer-name-span">
        {props.element.n.toUpperCase ()}
      </span>
    </div>
  );
};

export default PlayerName;
