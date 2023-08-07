import React from "react";
import '../Styles/ChatInformation.css';
import avatar from "../Images/avatar.jpeg";

export const ChatInformation = (chatInfoProps: {name: string, message: string, photo: string, onChatSelected : () => void }) => {


    return <>
        <div className='userChat' onClick={chatInfoProps.onChatSelected}>
            {
                chatInfoProps.photo ?
                    <img className='imgChat' src={"data:image/png;base64, " + chatInfoProps.photo} alt="avatar"/> :
                    <img className='imgChat' src={avatar} alt="avatar"/>
            }
            <div className='userChatInfo'>
                <span className={'nameInfo'}>{chatInfoProps.name}</span>
                <span className={'lastMessage'}>{chatInfoProps.message}</span>
            </div>
        </div>
    </>
}