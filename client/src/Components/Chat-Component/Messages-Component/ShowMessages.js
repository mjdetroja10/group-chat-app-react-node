import ScrollToBottom from "react-scroll-to-bottom";
import { JoinedUsers } from "./Joined_users/JoinedUsers";
import "../../../style/showmessage.css";

export const ShowMessages = (props) => {
  const { joinedUsers, messageList, currentUser } = props;

  return (
    <ScrollToBottom className="message-container scrollbar">
      <div className="welcome-text-wrapper">
        <JoinedUsers joinedUsers={joinedUsers} currentUser={currentUser} />

        {(messageList || messageList.length > 0) &&
          messageList.map((user) => {
            return (
              <div
                className={`message`}
                id={user.username === currentUser ? "you" : "other"}
                key={user.id}
              >
                <div>
                  <div className="message-content">
                    <p>{user?.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{user?.time}</p>
                    <p id="author">{user?.username}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </ScrollToBottom>
  );
};
