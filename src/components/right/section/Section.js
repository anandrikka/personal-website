import React from 'react';
import SectionTitle from './SectionTitle';
import SectionContent from './SectionContent';

function Section({ classes, children }) {
  return (
    <div className={`${classes} section-wrapper`}>
      <div className="container-fluid">
        {children}
      </div>
    </div>
  )
}

Section.Title = SectionTitle;
Section.Content = SectionContent;

export default Section;
