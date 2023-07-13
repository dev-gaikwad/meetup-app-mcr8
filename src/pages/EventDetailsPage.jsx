import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdSchedule, MdLocationOn, MdCurrencyRupee } from 'react-icons/md';

import { MeetUpContext } from '../context/MeetUpContext';
import SpeakerTile from '../components/SpeakerTile';
import '../css/EventDetailsPage.css';

const EventDetailsPage = () => {
  const { id } = useParams();
  const { allMeetUps } = useContext(MeetUpContext);
  const navigate = useNavigate();

  const event = allMeetUps.meetups.find((meetup) => meetup.id === id);
  return event ? (
    <main>
      <div className='detailsPageContainer'>
        <div className='eventDetailsContainer'>
          <h1>{event.title}</h1>
          <p className='hostedBy'>Hosted By</p>
          <p className='data-hostedBy'>{event.hostedBy}</p>
          <img src={event.eventThumbnail} alt='' />
          <h3>Details</h3>
          <p>{event.eventDescription}</p>
          <h3>Additional Information</h3>
          <p className='label-info'>
            Dress Code : <span>{event.additionalInformation.dressCode}</span>
          </p>
          <p className='label-info'>
            Age Restrictions :{' '}
            <span>{event.additionalInformation.ageRestrictions}</span>
          </p>
          <h3>Event Tags</h3>
          {event.eventTags.map((tag) => (
            <p className='tag'>{tag}</p>
          ))}
        </div>

        <div className='eventInfoContainer'>
          <div className='detailsTile'>
            <div className='info'>
              <MdSchedule />
              <p>
                {event.eventStartTime} to {event.eventEndTime}
              </p>
            </div>
            <div className='info'>
              <MdLocationOn />
              <p>
                {event.location}, {event.address}
              </p>
            </div>
            <div className='info'>
              <MdCurrencyRupee />
              <p>{event.price}</p>
            </div>
          </div>
          <div className='speakersContainer'>
            {event.speakers.map((speaker, index) => (
              <SpeakerTile key={index} speaker={speaker} />
            ))}
          </div>

          <div className='rsvpContainer'>
            <button onClick={() => {}}>RSVP</button>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <main>
      Something went wrong <span onClick={() => navigate('/')}>Go Home</span>
    </main>
  );
};

export default EventDetailsPage;
