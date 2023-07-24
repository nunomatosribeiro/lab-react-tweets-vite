import ProfileImage from "./ProfileImage";
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"

function Tweet() {
  return (
    <div className="tweet">
      
< ProfileImage image={ProfileImage}/>
<div className="body">
        <div className="top">
        <User name={User.name} handle={User.handle} />
        </div>
        <Message message={Message.message} />
        <Timestamp timestamp={Timestamp.timestamp} />

        <Actions /> 
    
      </div>

      
    </div>
  );
}

export default Tweet;

