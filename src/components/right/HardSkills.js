import React, { useContext } from "react";
import { ProfileContext } from "../../App";
import Section from "./section/Section";
import ProgressItem from "./section/ProgressItem";

function HardSkills() {
  const {
    hard_skills: { title, content }
  } = useContext(ProfileContext);

  return (
    <Section classes="skills-wrapper">
      <Section.Title>{title}</Section.Title>
      <Section.Content>
        <div className="col-md-12">
          <div className="progress-wrapper">
            {content.map((item, index) => (
              <ProgressItem
                key={`progress-item-${index}`}
                name={item.technology}
                percent={item.confidence_level}
              />
            ))}
          </div>
        </div>
      </Section.Content>
    </Section>
  );
}

export default HardSkills;
