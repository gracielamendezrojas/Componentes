import React, {useEffect, useState} from 'react'
import {getChatsByUserId} from "../Services/chatService";
import {getCookieValue} from "../Services/utils";
import {parseJwt} from "../Services/jwt";
import {ChatInformation} from "./ChatInformation";


const ChatsList = (propChatList: {chats: Array<any>, onChatSelected : (chat: any) => void,  termValue: string}) => {
    const chats = propChatList.chats
    const termValue = propChatList.termValue;
    const token = getCookieValue('token');
    const decode =  parseJwt(token);

    if(!chats){
        return <span>Loading</span>
    }

    console.log(termValue)

    const filterData = () => {
        if (termValue === ""){
            return chats
        }
        let result = chats.filter((chat) => chat.name.includes(termValue))
        return result
    }

    return <>
        <div className='chats'>
            {filterData().map((chat) =>{
                const latestMessage = chat.messages[chat.messages.length -1]
               return <ChatInformation
                   key={chat.name}
                   name={chat.name}
                   message={latestMessage?.content}
                   photo={chat.photo} onChatSelected={() => propChatList.onChatSelected(chat)}/>
            })}
        </div>
    </>
}

export default ChatsList