import React from 'react'; 
import avatar from "../Images/avatar.jpeg";
import {getCookieValue} from "../Services/utils"; 
import {parseJwt} from "../Services/jwt";
import '../Styles/navBar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "@mui/material/Link";



const Navbar = () => {
    const userInfo = getCookieValue('token');
    const parseUserInfo =  parseJwt(userInfo); 
    const avatarImage = localStorage.getItem('avatar');
    const logout = (event) =>
    {
        event.preventDefault();
        document.cookie = 'token' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div className='navbar'>

            <div className='user'>

                {
                    avatarImage.photo ?
                        <img src={"data:image/png;base64, " + avatarImage} className='imgChat' /> :
                        <img className='navImgChat' src={avatar} alt="avatar"/>
                }
                <div className={"cont-name"}>
                    <span className={"name"}> {parseUserInfo.nickName} </span>
                </div>

            </div>

            <div className={'cont-logout'}>
                <Link onClick={logout} underline="hover"><LogoutIcon style={{ color: 'white' }} fontSize={'large'}/></Link>
            </div>

        </div>
    )
}

export default Navbar