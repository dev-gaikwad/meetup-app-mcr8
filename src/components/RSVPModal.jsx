import React from 'react';

import '../css/RSVPModal.css';

const RSVPModal = ({ setDisplayModal }) => {
  const RSVPInputHandler = () => {};

  const RSVPSubmitHandler = () => {};
  return (
    <>
      <div className='modal-container'>
        <div className='centered'>
          <div className='modal'>
            <h6 className='modal-heading'>Create New RSVP</h6>
            <h1 className='modal-heading'>RSVP</h1>

            <form className='RSVP-form' onSubmit={RSVPSubmitHandler}>
              <div className='input-container'>
                <label htmlFor='name'>Name:</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='John Doe'
                  required
                  onChange={RSVPInputHandler}
                />
              </div>

              <div className='input-container'>
                <label htmlFor='email'>Email:</label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='admin@mail.com'
                  required
                  onChange={RSVPInputHandler}
                />
              </div>

              <div className='modal-buttons-container'>
                <button
                  className='modal-btn'
                  type='button'
                  onClick={() => setDisplayModal(false)}
                >
                  Discard
                </button>
                <button className='modal-btn' type='submit'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RSVPModal;
