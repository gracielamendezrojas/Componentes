import React, {useEffect, useState} from 'react'
import {getChatsByUserId} from "../Services/chatService";
import {getCookieValue} from "../Services/utils";
import {parseJwt} from "../Services/jwt";
import {ChatInformation} from "./ChatInformation";

const ChatsList = (propChatList: {onChatSelected : (chat: any) => void}) => {
    const [chats, setChats] = useState();
    const token = getCookieValue('token');
    const decode =  parseJwt(token);

    useEffect(() => {
        getChatsByUserId(decode.id).then((value) => {
            setChats(value);
        });
    }, [decode.id])

    if(!chats){
        return <span>Loading</span>
    }

    return <>
        <div className='chats'>
            {chats.map((chat) =>{
                const latestMessage = chat.messages[chat.messages.length -1]
               return <ChatInformation
                   key={chat.name}
                   name={chat.name}
                   message={latestMessage.content}
                   photo={chat.photo} onChatSelected={() => propChatList.onChatSelected(chat)}/>
            })}
        </div>
    </>
}

export default ChatsList