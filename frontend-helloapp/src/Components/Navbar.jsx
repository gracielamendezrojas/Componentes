import React from 'react'; 
import avatar from "../Images/avatar.jpeg";
import {getCookieValue} from "../Services/utils"; 
import {parseJwt} from "../Services/jwt"; 



const Navbar = () => {
    const userInfo = getCookieValue('token');
    const parseUserInfo =  parseJwt(userInfo); 
    const avatarImage = localStorage.getItem('avatar'); 
    //console.log(parseUserInfo); 
    return (
        <div className='navbar'>
            <span className='logo'>HelloApp</span>
            <div className='user'> 
                <img src={"data:image/png;base64, " + avatarImage} className='imgChat'  alt="avatar"/>
                <span> {parseUserInfo.nickName} </span>
            </div>
        </div>
    )
}

export default Navbar