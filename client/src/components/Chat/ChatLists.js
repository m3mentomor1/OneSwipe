import React, { useEffect, useState } from 'react';
import ChatList from './ChatList';

function ChatLists({ user, matchUsers, setMatchChatDisplay, setRecipient, cable, showUnreadMessages, setShowUnreadMessages, setPrevMatchChatDisplay, setTotalMessages }) {
  const [listMessages, setListMessages] = useState([]);

  useEffect(() => {
    if (user.id) {
      fetch(`/api/users/${user.id}/message_histories`)
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setListMessages(data);
            const obj = {};
            data.forEach((listMessage) => {
              obj[listMessage[0].message.pair_id] = true;
            });
            setShowUnreadMessages(obj);

            // Calculate the total number of messages
            const total = data.reduce((sum, listMessage) => sum + listMessage.length, 0);
            setTotalMessages(total); // Update the total number of messages
          });
        }
      });
    }
  }, [user.id, setShowUnreadMessages, setTotalMessages]);

  useEffect(() => {
    if (user.id) {
      cable.subscriptions.create(
        {
          channel: 'ChatlistsChannel',
          user_id: user.id,
        },
        {
          received: () => {
            fetch(`/api/users/${user.id}/message_histories`)
            .then((r) => {
              if (r.ok) {
                r.json().then((data) => {
                  setListMessages(data);

                  // Calculate the total number of messages
                  const total = data.reduce((sum, listMessage) => sum + listMessage.length, 0);
                  setTotalMessages(total); // Update the total number of messages
                });
              }
            });
          },
        }
      );
    }
  }, [user.id, setListMessages, cable.subscriptions, setTotalMessages]);

  return (
    <div className="chat-lists">
      {listMessages.map((listMessage, index) => (
        <ChatList
          key={index}
          listMessage={listMessage}
          matchUsers={matchUsers}
          user={user}
          setPrevMatchChatDisplay={setPrevMatchChatDisplay}
          showUnreadMessages={showUnreadMessages}
          setShowUnreadMessages={setShowUnreadMessages}
          setMatchChatDisplay={setMatchChatDisplay}
          setRecipient={setRecipient}
        />
      ))}
    </div>
  );
}

export default ChatLists;
