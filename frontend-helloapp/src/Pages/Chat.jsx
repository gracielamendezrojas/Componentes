import '../Styles/Chat.css';
import Sidebar from '../Components/Sidebar';
import ChatC from '../Components/ChatC';
 

function Chat() {

  return (

    <div className='chat'>
      <div className='container'>
        <Sidebar/>
        <ChatC/>

      </div>
    </div>
  );
}

export default Chat;