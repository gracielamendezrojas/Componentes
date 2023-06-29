import '../Styles/AboutUs.css';
import Header from '../Components/Header'; 
import teamImage from "../Images/team.png";
import cellphoneImage from "../Images/chat.png";
import Typography from '@mui/material/Typography';


function LogIn() {
  return (
    <div className="App">
      <Header/>
      <div className='b-color-purple padding'>

          <div> 
            <img src={cellphoneImage}  className='cellphoneImage padding' alt="Cellphone Image"/>

            <Typography variant="h1" className=' text_aboutUs padding color-white ' gutterBottom>
              About us 
            </Typography>

          </div>
          <div className='flex gap'> 
            <div className='b-color-white borderRadius padding color-gray'> 
              <Typography variant="h4" gutterBottom>
                Mision
              </Typography>
              <Typography variant="h6" className='padding ' gutterBottom>
                Our mission is to create a safe, inclusive, and engaging online environment where individuals can connect and communicate. 
                We strive to foster meaningful conversations, provide valuable information and promote empathy. 
              </Typography>
            </div>
            <div className='b-color-white borderRadius padding color-gray'> 
              <Typography variant="h4" gutterBottom>
                Vision
              </Typography>
              <Typography variant="h6" className='padding ' gutterBottom>
                Our vision is to revolutionize online communication by becoming the leading platform that connects individuals, families and friends from all walks of life, transcending geographical boundaries and cultural differences.
              </Typography>
            </div>
          </div>
      </div>
      <div> 
        <Typography variant="h2" className='  padding color-gray' gutterBottom>
          Our  main values are:
        </Typography>
        <div className='flex flex_center bigger_gap padding'>
          <div className='circle color-white'> 
            <Typography className='padding10'variant="h4" gutterBottom>
              Empathy
            </Typography>
          </div>
          <div className='circle color-white'> 
            <Typography className='padding10'variant="h4" gutterBottom>
              Safety
            </Typography>
          </div>
          <div className='circle color-white'> 
            <Typography className='padding10'variant="h4" gutterBottom>
              Innovation
            </Typography>
          </div>
          <div className='circle color-white'> 
            <Typography className='padding10'variant="h4" gutterBottom>
              Collaboration
            </Typography>
          </div>


        </div>

      </div>
      <div>
        <img src={teamImage}  alt="Team Image"/>
        <Typography variant="h2" className=' text_team padding color-purple' gutterBottom>
          HelloApp Team
        </Typography>

        <Typography variant="h6" className='  padding color-purple' gutterBottom>
        Our team brings together a wealth of expertise with over 20 years of collective experience in developing and delivering cutting-edge chat applications. With a deep understanding of user behavior, emerging technologies, and industry trends, we have successfully created and launched chat apps that have connected millions of users worldwide. Our team comprises skilled developers, designers, and strategists who have a proven track record in building robust and scalable chat platforms across various devices and operating systems.
        </Typography>

      </div>

    </div>
  );
}

export default LogIn;