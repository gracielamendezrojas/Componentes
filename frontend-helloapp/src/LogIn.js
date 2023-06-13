import './LogIn.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import {createMuiTheme, ThemeProvider} from '@mui/material/styles';


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

const wTheme = createMuiTheme({
  palette: {
    primary:{
      main: '#ffffff'
    },
    text:{
      primary: '#ffffff'
    }
  }
});


function LogIn() {
  return (
    <div className="App">
      <header className='flexSpaceBetween'>
        <div className='flexStart'>          
          <Typography variant="h3" className='titleColor' gutterBottom>
            HelloApp
          </Typography>
        </div>
        <div className='flexEnd width'>
          <Link href="/" underline="hover" >
            {<Typography variant="h6"  gutterBottom>
              Home
            </Typography>}
          </Link>
          <Link href="#" underline="hover" className='left-padding'>
            {<Typography variant="h6" gutterBottom>
              About us
            </Typography>}
          </Link>
          <Link href="/login" underline="hover" className='left-padding right-padding'>
            {<Typography variant="h6" gutterBottom>
              Login
            </Typography>}        
          </Link>
        </div>
        
      </header>
      <div className='flexContainer flexSpaceBetween'>
        <div className = 'flexColumn flexSpaceEvenly b-color-purple dimensions borderRadius'>

          <Typography variant="h5" className='color-white'>
            Log in
          </Typography>

          <ThemeProvider theme={wTheme}>
            <TextField required label="Email"  variant="standard" focused />
            <TextField required label="Password" variant="standard" focused />

            <Button  variant="contained">
              <Typography variant="h5" className='color-purple'>
                Log in
              </Typography>
            </Button>

          </ThemeProvider>


        </div>

        <div className = 'flexColumn flexSpaceEvenly dimensions'>

          <Typography variant="h5" className='color-purple'>
            Register
          </Typography>

          <ThemeProvider theme={pTheme}>
            <TextField required label="First Name" variant="standard" focused />
            <TextField required label="Last Name" variant="standard" focused />
            <TextField required label="Nickname" variant="standard" focused />
            <TextField required label="Email" variant="standard" focused />
            <TextField required label="Password" variant="standard" focused />

            <Button  variant="contained" >
              <Typography variant="h5" className='color-white' >
                Register
              </Typography>
            </Button>

          </ThemeProvider>


        </div>

      </div>
    </div>
  );
}

export default LogIn;