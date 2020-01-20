import React, { useContext } from "react";
import { ProfileContext } from "../../App";
import Section from "./section/Section";
import LevelItem from "./section/LevelItem";

function Education() {
  const {
    education: { title, content }
  } = useContext(ProfileContext);

  return (
    <Section classes="section-education">
      <Section.Title>{title}</Section.Title>
      <Section.Content>
        <div className="col-md-12">
          {content.map((item, index) => (
            <LevelItem {...item} key={`education_item_${index}`} />
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}

export default Education;

