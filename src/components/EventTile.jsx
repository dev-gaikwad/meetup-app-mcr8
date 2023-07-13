import React from 'react';

import '../css/EventTile.css';
import { useNavigate } from 'react-router-dom';

const EventTile = ({ meetup }) => {
  const navigate = useNavigate();
  return (
    <article
      className='eventTile'
      onClick={() => navigate(`/details/${meetup.id}`)}
    >
      <div className='thumbnailContainer'>
        <img src={meetup.eventThumbnail} alt='thumbnail' />
        <p>{meetup.eventType}</p>
      </div>
      <div className='infoContainer'>
        <p className='eventTime'>{meetup.eventStartTime}</p>
        <p className='eventTitle'>{meetup.title}</p>
      </div>
    </article>
  );
};

export default EventTile;
