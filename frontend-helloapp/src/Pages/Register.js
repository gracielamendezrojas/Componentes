import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Button from "@mui/material/Button";

const pTheme = createTheme({
    palette: {
        primary:{
            main: '#97A7CF'
        },
        text:{
            primary: '#97A7CF'
        }
    }
});

export default function Register() {

    return<>

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

    </>
}