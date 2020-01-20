import React, { useContext } from 'react';

import { ProfileContext } from "../../App";
import Section from "./section/Section";
import AcademicaItem from "./section/AcademicaItem";

function Academica() {
  const {
    academica: { title, content }
  } = useContext(ProfileContext);

  return (
    <Section classes="section-education">
      <Section.Title>{title}</Section.Title>
      <Section.Content>
        <div className="col-md-12">
          {content.map((item, index) => (
            <AcademicaItem {...item} key={`academica_item_${index}`} />
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}

export default Academica;