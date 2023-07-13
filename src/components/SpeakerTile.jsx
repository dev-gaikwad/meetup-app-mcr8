import React from 'react';

import '../css/SpeakeraTile.css';

const SpeakerTile = ({ speaker }) => {
  return (
    <article className='speakerTile'>
      <div className='speakerPhoto'>
        <img src={speaker.image} alt='Profile' />
      </div>
      <div className='speakerInfo'>
        <p className='speakerName'>{speaker.name}</p>
        <p className='speakerDesignation'>{speaker.designation}</p>
      </div>
    </article>
  );
};

export default SpeakerTile;
