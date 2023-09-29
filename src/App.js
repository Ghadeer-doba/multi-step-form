import { Grid } from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import Typography from '@mui/material/Typography';
import stylee from'./stylee.css';

function App() {
  
  return (
  
    <Grid 
    container 
    direction="column"
    justifyContent="center"
    alignItems="center " 
     
    >
   <Typography mt={6} sx={{ fontSize:30,fontWeight:'bold',fontFamily: 'Roboto Slab', }}  variant="h1" >
        Join Our Community Of Developers
    </Typography>

    <Typography sx={{ color: 'text.secondary',width:450,fontSize:15,textAlign:'center',fontFamily: 'sans-serif',fontWeight:'200'  }} m={2} >
    To join our community and participate in frontend
     challenges please fill out the following form    
     </Typography>  

      <PersonalInfo/> 
      </Grid>
    
  );
}

export default App;
