import '../Styles/Header.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Header() {
    return (
      <div>
        <header className="flexSpaceBetween">
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
            <Link href="/aboutus" underline="hover" className='left-padding'>
              {<Typography variant="h6" gutterBottom>
                About us
              </Typography>}
            </Link>
            <Link href="/register" underline="hover" className='left-padding '>
              {<Typography variant="h6" gutterBottom>
                Register
              </Typography>}        
            </Link>
            <Link href="/login" underline="hover" className='left-padding right-padding'>
              {<Typography variant="h6" gutterBottom>
                Login
              </Typography>}        
            </Link>
          </div>

        </header>
       
      </div>
    );
  }

  export default Header;