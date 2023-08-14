import '../Styles/Chat.css';
import Sidebar from '../Components/Sidebar';
import ChatDetail from '../Components/ChatDetail';
import {useEffect, useState} from "react";
import io from "socket.io-client"
import {ip} from "../Services/userService";
import {getCookieValue} from "../Services/utils";
import {parseJwt} from "../Services/jwt";
import {getChatsByUserId} from "../Services/chatService";

let socket;
const CONNECTION_PORT = ip;

function Chat() {
    const [chats, setChats] = useState();
    const [selectedChat, setSelectedChat] = useState();
    const [checkSelectedChat, setCheckSelectedChat] = useState(false);
    const userInfo = getCookieValue('token');
    const decode = parseJwt(userInfo);

    useEffect(() => {
        getChatsByUserId(decode.id).then((value) => {
            setChats(value);
        });
    }, [decode.id])

    useEffect(() => {
        socket = io(CONNECTION_PORT);

        const onMessageChanged = () => {
            getChatsByUserId(decode.id).then((value) => {
                setChats(value);
                setCheckSelectedChat(true)
            });
        }

        socket.on(decode.id, onMessageChanged);
    }, [decode.id]);

    useEffect(() => {
        if (checkSelectedChat) {
            const selectedChatFromList = chats?.find(c => c.id === selectedChat?.id);

            if (selectedChatFromList) {
                setSelectedChat(selectedChatFromList)
            }

            setCheckSelectedChat(false)
        }
    }, [checkSelectedChat, chats, selectedChat])

    return <>
        <div className='chat'>
            <div className='container'>
                <Sidebar chats={chats} onChatSelected={(chat: any) => {
                    setSelectedChat(chat)
                }}/>
                {
                    selectedChat && <ChatDetail chat={selectedChat} onMessageSent={(newMessage) => {
                        const existingChat = chats.find(c => c.id === newMessage.idConversation)

                        if (existingChat) {
                            existingChat.messages.push(newMessage)
                            setChats([...chats])
                            setSelectedChat({...existingChat})
                        }
                    }
                    }/>
                }
            </div>
        </div>
    </>
}

export default Chat;