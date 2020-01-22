import React, { useContext } from 'react';
import { ProfileContext } from '../../App';
import ProgressItem from './section/ProgressItem';
import Section from './section/Section';

function SoftSkills() {
  const { soft_skills: { title, content } } = useContext(ProfileContext);

  return (
    <Section classes="skills-wrapper">
      <Section.Title>{title}</Section.Title>
      <Section.Content>
        <div className="col-md-12">
          <div className="progress-wrapper">
            {content.map((item, index) => (
              <ProgressItem
                key={`progress-item-${index}`}
                name={item.skill}
                percent={item.confidence_level}
              />
            ))}
          </div>
        </div>
      </Section.Content>
    </Section>
  )
  // return (
  //   <Section classes="expertise-wrapper gray-bg">
  //     <Section.Title>{expertise.title}</Section.Title>
  //     <Section.Content>
  //       {expertise.content.map((item, index) => (
  //         <Section.Content.Item {...item} key={`expertise_item_${index}`} />
  //       ))}
  //     </Section.Content>
  //   </Section>
  // );
}

export default SoftSkills;