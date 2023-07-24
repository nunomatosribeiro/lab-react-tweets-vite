function User({name, handle}) {
  console.log({name, handle})
    return (
     
<span className="user">
  <span className="name">{tweetsArray.user.name}</span>
  <span className="handle">@{tweetsArray.user.handle}</span>
</span>

    );
  }
  
  export default User;