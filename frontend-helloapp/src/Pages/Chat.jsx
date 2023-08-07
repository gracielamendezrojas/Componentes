import '../Styles/Chat.css';
import Sidebar from '../Components/Sidebar';
import ChatDetail from '../Components/ChatDetail';
import {useState} from "react";


function Chat() {
    const [selectedChat, setSelectedChat] = useState();

    return <>
        <div className='chat'>
            <div className='container'>
                <Sidebar onChatSelected={(chat: any) => {
                    setSelectedChat(chat)
                }}/>
                {
                    selectedChat && <ChatDetail chat={selectedChat} />
                }
            </div>
        </div>
    </>
}

export default Chat;