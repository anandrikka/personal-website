import React, { useContext } from "react";
import ProfilePic from "./ProfilePic";
import { ProfileContext } from "../../App";
import SocialMedia from "../social-media/SocialMedia";
import Signature from "./Signature";
import Summary from "./SummaryItem";

function Left() {

  const { name, title, summary } = useContext(ProfileContext);

  return (
    <header className="header">
      <ProfilePic />
      <div className="content">
        <h1>{name}</h1>
        <span className="lead">{title}</span>
        <div className="about-text">
          <Summary summary={summary} />
          <Signature />
        </div>
        <SocialMedia />
      </div>
    </header>
  );
}

export default Left;
