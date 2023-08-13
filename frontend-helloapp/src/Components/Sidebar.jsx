import React from 'react'
import Navbar from './Navbar';
import Search from './Search';
import ChatsList from './ChatsList';



const Sidebar = (propSideBar: { chats: Array<any>, onChatSelected : (chat: any) => void}) => {
    return <>
        <div className='sidebar'>
            <Navbar/>
            <Search/>
            <ChatsList chats={propSideBar.chats} onChatSelected={propSideBar.onChatSelected}/>
        </div>
    </>
}

export default Sidebar