import '../Styles/App.css';
import Button from '@mui/material/Button';
import homeImage from "../Images/chatimage.jpg";
import hiImage from "../Images/HiImage.png";
import Typography from '@mui/material/Typography';
import Header from "../Components/Header";


function App() {

  return (
    <div className="App">
      <Header>

      </Header>
      <div className='flexContainer flexSpaceAround'>
        <div>
          <Typography variant="h1" className=' titleColor' gutterBottom>
            HelloApp
          </Typography>
          <Typography variant="h6" className=' color-gray' gutterBottom>
            HelloApp offers you the opportunity to connect with friends, family, loved ones and others.
          </Typography>
          <Typography variant="h3" className='padding color-gray' gutterBottom>
            Now is the time to chat online at no cost!
          </Typography>
          <img src={hiImage}  className='HiImage' alt="HelloApp Image"/>
          <Button  variant="contained" href="/login">
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