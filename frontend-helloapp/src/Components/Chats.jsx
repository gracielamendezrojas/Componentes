import React from 'react'
import avatar from "../Images/avatar.jpeg";


const Chats = () => {
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

        </div>
    )
}

export default Chats