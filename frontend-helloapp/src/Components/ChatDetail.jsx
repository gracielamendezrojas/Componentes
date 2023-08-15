import React, {useEffect, useMemo} from 'react'
import more from '../Images/more.png'
import Messages from '../Components/Messages';
import InputPanel from './InputPanel';
import avatar from "../Images/avatar.jpeg";
import '../Styles/ChatDetail.css';


const ChatDetail = (chatDetailProps: {chat: any, onMessageSent:(message) => void}) => {

    const avatarImage = localStorage.getItem('avatar');

    const toPhoto = useMemo(() => {
        return chatDetailProps.chat.photo ?
            <img className='imgChat' src={"data:image/png;base64, " + chatDetailProps.chat.photo} alt="avatar"/> :
            <img className='imgChat' src={avatar} alt="avatar"/>
    }, [chatDetailProps.chat.photo]);

    const myPhoto = useMemo(() => {
        return avatarImage ?
            <img src={"data:image/png;base64, " + avatarImage} className='imgChat' /> :
            <img className='navImgChat' src={avatar} alt="avatar"/>

    }, [avatarImage])

    return <>
        <div className='chatC'>
            <div className='chatInfo'>
                <div className={'toInfo'}>
                    {toPhoto}
                    <div className={'cont-toName'}>
                    <span className={'toName'}>{chatDetailProps.chat.name}</span>
                    </div>
                </div>
            </div>
            <Messages messages={chatDetailProps.chat.messages} toPhoto={toPhoto} myPhoto={myPhoto}/>

            <InputPanel chat={chatDetailProps.chat} onMessageSent={chatDetailProps.onMessageSent}/>
        </div>
    </>
}

export default ChatDetail