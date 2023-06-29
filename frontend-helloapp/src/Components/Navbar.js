import React from 'react'; 
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
  


const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>HelloApp</span>
            <div className='user'> 
                <img src='' alt=''/>
                <span> USER_NAME_CHANGE </span>
                <ThemeProvider theme={pTheme}>
                    <Button  variant="contained" >
                        <Typography variant="h5" className='color-white' >
                            Log out
                        </Typography>
                    </Button>
                </ThemeProvider>

            </div>
        </div>
    )
}

export default Navbar