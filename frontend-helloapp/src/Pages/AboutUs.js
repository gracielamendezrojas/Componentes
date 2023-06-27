import '../Styles/AboutUs.css';
import Header from '../Components/Header'; 
import hiImage from "../Images/HiImage.png";


function LogIn() {
  return (
    <div className="App">
      <Header/>
      <div>
        <div className='b-color-purple'>
          <img src={hiImage}  className='HiImage' alt="HelloApp Image"/>

        </div>

      </div>
    </div>
  );
}

export default LogIn;