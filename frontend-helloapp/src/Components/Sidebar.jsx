import React, {useState} from 'react'
import Navbar from './Navbar';
import Search from './Search';
import ChatsList from './ChatsList';



const Sidebar = (propSideBar: { chats: Array<any>, onChatSelected : (chat: any) => void}) => {
    const [term, setTerm] = useState("")

    const pCallBack = (string) => {
        setTerm(string)
    }

    return <>
        <div className='sidebar'>
            <Navbar/>
            <Search returnTerm = {pCallBack}/>
            <ChatsList chats={propSideBar.chats} onChatSelected={propSideBar.onChatSelected} termValue = {term} />
        </div>
    </>
}

export default Sidebar