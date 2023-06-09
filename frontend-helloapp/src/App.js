import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';


function App() {
  return (
    <div className="App">
      <header className='flexSpaceBetween'>
        <div className='flexStart'>          
          <Typography variant="h3" className='titleColor' gutterBottom>
            HelloApp
          </Typography>
        </div>
        <div className='flexEnd width'>
          <Link href="#" underline="hover" >
            {<Typography variant="h6"  gutterBottom>
              Home
            </Typography>}
          </Link>
          <Link href="#" underline="hover" className='left-padding'>
            {<Typography variant="h6" gutterBottom>
              About us
            </Typography>}
          </Link>
          <Link href="#" underline="hover" className='left-padding right-padding'>
            {<Typography variant="h6" gutterBottom>
              Login
            </Typography>}        
          </Link>
        </div>
        
      </header>
      <div className='flexContainer flexSpaceBetween'>
        <div className = 'flexColumn flexSpaceEvenly b-color-purple dimensions '>

          <Typography variant="h5" className='color-white'>
            Log in
          </Typography>

          <TextField  id="standard-basic" label="Email"  variant="standard" />
          <TextField  id="standard-basic" label="Password" variant="standard" />

          <Button  variant="contained">
            <Typography variant="h5" gutterBottom>
              Log in
            </Typography>
          </Button>
        </div>

        <div className = 'flexColumn flexSpaceEvenly dimensions'>

          <Typography variant="h5" className='color-purple'>
            Register
          </Typography>

          <TextField  id="standard-basic" label="First Name" variant="standard" />
          <TextField  id="standard-basic" label="Last Name" variant="standard" />
          <TextField  id="standard-basic" label="Nickname" variant="standard" />
          <TextField  id="standard-basic" label="Email" variant="standard" />
          <TextField  id="standard-basic" label="Password" variant="standard" />

          <Button  variant="contained" >
            <Typography variant="h5" gutterBottom >
              Register
            </Typography>
          </Button>
        </div>

      </div>
    </div>
  );
}

export default App;