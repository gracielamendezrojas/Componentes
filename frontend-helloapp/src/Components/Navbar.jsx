import React from 'react'; 
import avatar from "../Images/avatar.jpeg";


const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>HelloApp</span>
            <div className='user'> 
                <img src={avatar} className='imgChat'  alt="avatar"/>
                <span> USER_NAME_CHANGE </span>
            </div>
        </div>
    )
}

export default Navbar