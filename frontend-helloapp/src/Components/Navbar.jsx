import React, {useState} from 'react'; 
import avatar from "../Images/avatar.jpeg";
import {getCookieValue} from "../Services/utils"; 
import {parseJwt} from "../Services/jwt";
import '../Styles/navBar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "@mui/material/Link";
import more from '../Images/more.png'


const Navbar = () => {
    const [isActionsOpen, setIsActionsOpen] = useState(false); 

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
                    avatarImage ?
                        <img src={"data:image/png;base64, " + avatarImage} className='imgChat' /> :
                        <img className='navImgChat' src={avatar} alt="avatar"/>
                }
                <div className={"cont-name"}>
                    <span className={"name"}> {parseUserInfo.nickName} </span>
                </div>

            </div>

            <div className={'cont-actions'}>
                <button onClick = {()=>{ setIsActionsOpen(!isActionsOpen) }} className='moreButton'>
                    <img className= 'img' src={more} alt='More'/>
                </button>
                <Link onClick={logout} underline="hover"><LogoutIcon style={{ color: 'white' }} fontSize={'large'}/></Link>
                {isActionsOpen && <ul className='action-menu'>
                    <li>
                        <Link href="/Profiles" style={{ color: 'white' }}>Editar perfil</Link>
                    </li>
                </ul>}
            </div>

        </div>
    )
}

export default Navbar