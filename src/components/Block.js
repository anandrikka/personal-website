import React from 'react';

function Block({ classes, children }) {
  return (
    <div className={`${classes} blocks`}>
      {children}
    </div>
  )
}

export default Block;
