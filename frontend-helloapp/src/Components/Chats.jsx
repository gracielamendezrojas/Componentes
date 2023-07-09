import React from 'react'
import avatar from "../Images/avatar.jpeg";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Chats = () => {
    const logout = (event) =>
    {
      event.preventDefault(); 
      document.cookie = 'token' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      window.location.href = "/"; 
      //alert("cookie deleted")
    }
    return (
        <div className='chats'>
            <div className='userChat'>
                <img className='imgChat' src={avatar}   alt="avatar"/>
                <div className='userChatInfo'>
                    <span>Name_Chat</span>
                </div>
            </div>
            <div className='userChat'>
                <img className='imgChat' src={avatar}   alt="avatar"/>
                <div className='userChatInfo'>
                    <span>Name_Chat</span>
                </div>
            </div>
            <div className='userChat'>
                <img className='imgChat' src={avatar}   alt="avatar"/>
                <div className='userChatInfo'>
                    <span>Name_Chat</span>
                </div>
            </div>


            <Link onClick={logout} className='logOut' underline="hover" >
              {<Typography variant="h6" gutterBottom>
                Log out
              </Typography>}
            </Link>

        </div>
    )
}

export default Chats