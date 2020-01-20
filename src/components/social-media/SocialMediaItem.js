import React from 'react';

function SocialMediaItem({ item }) {
  return (
    <li>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <i className={item.icon} aria-hidden="true"></i>
      </a>
    </li>
  )
}

export default SocialMediaItem;
