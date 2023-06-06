import './App.css';
import Button from '@mui/material/Button';
import homeImage from "./Images/chatimage.jpg";
import hiImage from "./Images/HiImage.png";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function App() {
  return (
    <div className="App">
      <header className='flexEnd'>
        <Link href="#" underline="hover" >
          {<Typography variant="h4"  gutterBottom>
            Home
          </Typography>}
        </Link>
        <Link href="#" underline="hover" className='left-padding'>
          {<Typography variant="h4" gutterBottom>
            About us
          </Typography>}
        </Link>
        <Link href="#" underline="hover" className='left-padding right-padding'>
          {<Typography variant="h4" gutterBottom>
            Login
          </Typography>}        
        </Link>
      </header>
      <div className='flexContainer flexSpaceAround'>
        <div>
          <Typography variant="h1" className='padding titleColor' gutterBottom>
            HelloApp
          </Typography>
          <Typography variant="h6" className='padding color-gray' gutterBottom>
            HelloApp offers you the opportunity to connect with friends, family, loved ones and others.
          </Typography>
          <Typography variant="h3" className='padding color-gray' gutterBottom>
            Now is the time to chat online at no cost!
          </Typography>
          <img src={hiImage}  className='HiImage' alt="HelloApp Image"/>
          <Button  variant="contained" >          
            <Typography variant="h5" gutterBottom>
              Let´s chat!
            </Typography>
          </Button>
        </div>
        <div className='flexEnd'>
          <img src={homeImage}  className="homeImage" alt="Home Image"/>
        </div>
      </div>
    </div>
  );
}

export default App;
