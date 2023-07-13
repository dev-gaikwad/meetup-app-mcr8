import React, { useContext } from 'react';

import '../css/AllEventsPage.css';
import EventTile from '../components/EventTile';
import { MeetUpContext } from '../context/MeetUpContext';

const AllEventsPage = () => {
  const { displayEvents } = useContext(MeetUpContext);
  console.log('allMeetups ->', displayEvents);

  return (
    <main>
      <section className='allEventsSection'>
        <div className='sectionHeader'>
          <h1>Meetup Events</h1>
        </div>
        <div className='eventTilesContainer'>
          {displayEvents ? (
            displayEvents.map((meetup) => (
              <EventTile key={meetup.id} meetup={meetup} />
            ))
          ) : (
            <>No Meetups</>
          )}
        </div>
      </section>
    </main>
  );
};

export default AllEventsPage;
