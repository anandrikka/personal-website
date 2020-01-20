import React, { useContext } from 'react';
import { ProfileContext } from '../../App';
import SocialMediaItem from './SocialMediaItem';

function SocialMedia() {
  const { social } = useContext(ProfileContext);
  return (
    <ul className="social-icon">
      { social.map((item, index) => <SocialMediaItem item={item} key={`social-item-${index}`} />)}
    </ul>
  );
}

export default SocialMedia;
