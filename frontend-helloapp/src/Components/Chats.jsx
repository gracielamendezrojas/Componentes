import React, {useState} from 'react'
import avatar from "../Images/avatar.jpeg";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Chats = () => {

    const [chats, setChats] = useState(
      [
          {
              img: {avatar},
              name: "Name_chat1",
              message: "Hello"
          },
          {
              img: {avatar},
              name: "Name_chat2",
              message: "Hello"
          },
          {
              img: {avatar},
              name: "Name_chat3",
              message: "Hello"
          },
      ]
    );

    const logout = (event) =>
    {
      event.preventDefault(); 
      document.cookie = 'token' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      localStorage.clear(); 
      window.location.href = "/"; 
      //alert("cookie deleted")
    }
    return (
        <div className='chats'>
            {chats.map((chat) =>{
                return(
                    <div className='userChat'>
                        <img className='imgChat' src={avatar}  alt="avatar"/>
                        <div className='userChatInfo'>
                            <span>{chat.name}</span>
                            <p>{chat.message}</p>
                        </div>
                    </div>
                );
            })}

            <Link onClick={logout} className='logOut' underline="hover" >
              {<Typography variant="h6" gutterBottom>
                Log out
              </Typography>}
            </Link>

        </div>
    )
}

export default Chats