import React, { useContext } from "react";
import { ProfileContext } from "../../App";
import Section from "./section/Section";
import LevelItem from "./section/LevelItem";

function Experience() {
  const {
    experience: { title, content }
  } = useContext(ProfileContext);

  return (
    <Section classes="section-experience gray-bg">
      <Section.Title>{title}</Section.Title>
      <Section.Content>
        <div className="col-md-12">
          {content.map((item, index) => (
            <LevelItem {...item} key={`experience_item_${index}`} />
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}

export default Experience;

