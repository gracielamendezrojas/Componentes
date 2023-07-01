import '../Styles/Chat.css';
import Sidebar from '../Components/Sidebar';
import ChatC from '../Components/ChatC';
import {createMuiTheme, ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const pTheme = createMuiTheme({
    palette: {
      primary:{
        main: '#97A7CF'
      },
      text:{
        primary: '#97A7CF'
      }
    }
  });
  

function Chat() {
  return (

    <div className='chat'>
          <ThemeProvider theme={pTheme}>
                    <Button className='button' variant="contained" >
                        <Typography variant="h5" className='color-white' >
                            Log out
                        </Typography>
                    </Button>
                </ThemeProvider>
      <div className='container'>
        <Sidebar/>
        <ChatC/>

      </div>
    </div>
  );
}

export default Chat;