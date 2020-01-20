import React from 'react';

function Summary({ summary }) {
  return summary.map((item, index) => <p key={`summary_item_${index}`}>{item}</p>)
}

export default Summary;

