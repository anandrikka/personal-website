import React from 'react';
import SectionContentItem from './SectionContentItem';

function SectionContent({ children }) {
  return (
    <div className="row">
      {children}
    </div>
  )
}

SectionContent.Item = SectionContentItem;

export default SectionContent;
