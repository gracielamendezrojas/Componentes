import React from 'react'
import avatar from "../Images/avatar.jpeg";

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img className='img_MessageI' src={avatar}   alt="avatar"/>
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p className='paragraph_owner'>Hello</p>
                <img className='img_MessageC' src={avatar}   alt="avatar"/>

            </div>
        </div>
    )
}

export default Message