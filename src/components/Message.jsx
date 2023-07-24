function Message(tweetsArray) {
    return (
      <div className="message">
        <p className="message"> {tweetsArray.message}</p>
      </div>
    );
  }
  
  export default Message;