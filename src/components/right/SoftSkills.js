import React, { useContext } from 'react';
import { ProfileContext } from '../../App';
import Section from './section/Section';

function SoftSkills() {
  const { soft_skills: expertise } = useContext(ProfileContext);

  return (
    <Section classes="expertise-wrapper gray-bg">
      <Section.Title>{expertise.title}</Section.Title>
      <Section.Content>
        {expertise.content.map((item, index) => (
          <Section.Content.Item {...item} key={`expertise_item_${index}`} />
        ))}
      </Section.Content>
    </Section>
  );
}

export default SoftSkills;