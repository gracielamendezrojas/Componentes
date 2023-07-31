import '../Styles/Chat.css';
import Sidebar from '../Components/Sidebar';
import ChatDetail from '../Components/ChatDetail';
 

function Chat() {

  return <>
      <div className='chat'>
          <div className='container'>
              <Sidebar/>
              <ChatDetail/>
          </div>
      </div>
  </>
}

export default Chat;