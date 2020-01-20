import React, { useContext } from 'react';

import Section from './section/Section';
import { ProfileContext } from '../../App';

function Intro() {
  const { intro } = useContext(ProfileContext);
  return (
    <Section classes="intro">
      <Section.Title>{intro.title}</Section.Title>
      <Section.Content>
        <div className="col-md-12">
          {intro.content.map((p, index) => (
            <p key={`intro_content_${index}`}>{p}</p>
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}

export default Intro;
