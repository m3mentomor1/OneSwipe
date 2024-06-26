import React, { useState } from 'react';
import Chat from './Chat';
import ChatLists from './ChatLists';
import MatchLists from './MatchLists';

function ChatContainer({ user, matchUsers, setMatchUsers, cable, chatContainerRef, swipeContainerRef, recipient, setRecipient, setShowViewedUser }) {
  const [matchChatDisplay, setMatchChatDisplay] = useState(0); 
  const [prevMatchChatDisplay, setPrevMatchChatDisplay] = useState(null);
  const [showUnreadMessages, setShowUnreadMessages] = useState({});
  const [totalMessages, setTotalMessages] = useState(0); // New state to keep track of total messages

  return (
    <div className="chat-container" ref={chatContainerRef}>
      <div>
        <button className="option" onClick={() => setMatchChatDisplay(0)}>Matches ({matchUsers.length})</button>
        <button className="option" onClick={() => setMatchChatDisplay(1)}>Messages ({totalMessages})</button> {/* Updated button */}
      </div>

      <div className="match-chat-list-container">
        {matchChatDisplay === 0 &&
          <MatchLists
            user={user}
            cable={cable}
            setPrevMatchChatDisplay={setPrevMatchChatDisplay}
            chatContainerRef={chatContainerRef}
            swipeContainerRef={swipeContainerRef}
            showUnreadMessages={showUnreadMessages}
            setShowUnreadMessages={setShowUnreadMessages}
            matchUsers={matchUsers}
            setMatchUsers={setMatchUsers}
            setShowViewedUser={setShowViewedUser}
            setMatchChatDisplay={setMatchChatDisplay}
            setRecipient={setRecipient} />}
        
        {matchChatDisplay === 1 &&
          <ChatLists 
            user={user}
            cable={cable}
            setPrevMatchChatDisplay={setPrevMatchChatDisplay}
            showUnreadMessages={showUnreadMessages}
            setShowUnreadMessages={setShowUnreadMessages}
            matchUsers={matchUsers}
            setMatchChatDisplay={setMatchChatDisplay}
            setRecipient={setRecipient}
            setTotalMessages={setTotalMessages} />} {/* Pass the setTotalMessages prop */}
        
        {matchChatDisplay === 2 &&
          <Chat 
            user={user}
            prevMatchChatDisplay={prevMatchChatDisplay}
            showUnreadMessages={showUnreadMessages}
            setShowUnreadMessages={setShowUnreadMessages}
            setMatchChatDisplay={setMatchChatDisplay}
            recipient={recipient}
            cable={cable} />}
      </div>
    </div>
  );
}

export default ChatContainer;
