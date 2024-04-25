import React, { useEffect, useRef, useState } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from './Chat/ChatContainer';
import ChatHeader from './Chat/ChatHeader';
import UserProfile from './UserProfile';
import nextButtonImage from '../images/next_button.png';
import backButtonImage from '../images/back_button.png';

function Dashboard({ user, cable, setShowAuth, showViewedUser, setShowViewedUser }) {
  const [characters, setCharacters] = useState([]);
  const [lastDirection, setLastDirection] = useState(null);
  const [matchUsers, setMatchUsers] = useState([]);
  const [recipient, setRecipient] = useState({});
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // Define current photo index state
  const [isLoading, setIsLoading] = useState(true); // State variable to manage loading state
  const chatContainerRef = useRef(null);
  const swipeContainerRef = useRef(null);

  function swiped(direction, id) {
    setLastDirection(direction);
    setTimeout(() => {
      setLastDirection(null);
    }, 3000);
    if (direction === 'right' || direction === 'left') {
      fetch('/api/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: user.id,
          browsed_user_id: id,
          liked: direction === 'right' ? true : false
        })
      })
        .then((r) => {
          if (r.ok) {
            fetch(`/api/users/${user.id}`)
              .then((r) => {
                if (r.ok) {
                  r.json().then((data) => {
                    setMatchUsers(data);
                  });
                }
              });
          }
        });
    }
  }

  useEffect(() => {
    if (user.id) {
      fetch(`/api/users/${user.id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gender_identity: user.gender_identity,
          gender_interest: user.gender_interest
        })
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              setCharacters(data);
              setIsLoading(false); // Set loading state to false when data fetching is complete
            });
          }
        });
    }
  }, [user.id, user.gender_identity, user.gender_interest]);

  // Define handleNextClick function
  const handleNextClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % 5); // Assuming you have 5 photo URLs
  };

  // Define handleBackClick function
  const handleBackClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1)); // Assuming you have 5 photo URLs
  };

  return (
    <div className="dashboard">
      <ChatHeader
        user={user}
        chatContainerRef={chatContainerRef}
        swipeContainerRef={swipeContainerRef}
        setShowAuth={setShowAuth}
      />
      <div className="dashboard-body">
        <ChatContainer
          user={user}
          chatContainerRef={chatContainerRef}
          swipeContainerRef={swipeContainerRef}
          matchUsers={matchUsers}
          setMatchUsers={setMatchUsers}
          cable={cable}
          recipient={recipient}
          setRecipient={setRecipient}
          setShowViewedUser={setShowViewedUser}
        />
        <div className="swipe-container" ref={swipeContainerRef}>
          {showViewedUser ?
            <UserProfile user={recipient} showViewedUser={showViewedUser} setShowViewedUser={setShowViewedUser} />
            :
            <div className="card-container">
              {isLoading ? (
                <div className="loading-overlay">
                  <div className="loading-animation"></div>
                  <p className="loading-text">Finding potential matches...</p>
                </div>
              ) : (
                characters.map((character) =>
                  <TinderCard className="swipe" key={character.id} onSwipe={(direction) => swiped(direction, character.id)}>
                    <div style={{ backgroundImage: "url(" + character[`url${currentPhotoIndex + 1}`] + ")" }} className="card">
                      <h3>{character.first_name}</h3>
                      {/* Next button */}
                      <img src={nextButtonImage} alt="Next" className="next-button" onClick={() => handleNextClick()} />
                      {/* Back button */}
                      <img src={backButtonImage} alt="Back" className="back-button" onClick={() => handleBackClick()} />
                    </div>
                  </TinderCard>
                )
              )}
              {!isLoading && lastDirection && <h2 className="swipe-info">You swiped {lastDirection}</h2>}
            </div>
          }
        </div>
      </div>
    </div>
  );    
}

export default Dashboard;
