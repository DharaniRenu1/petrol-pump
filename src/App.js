import './App.css';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'  


const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButton = styled(ButtonUnstyled)`
font-family: url(./Fontspring-DEMO-proximanovacond-regular.otf);
 font-weight: bold;
  font-size: 2.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width:300px;
  height:100px;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function App() {

  localStorage.removeItem("fueltype")
  localStorage.removeItem("litre")
  localStorage.removeItem("pprice")
  localStorage.removeItem("amount")

  return (
    <div className="App">
       
        <header className="App-header">
        <div  style={{marginTop:-100, color:"#006837", fontWeight:"Bold", fontSize: 50,}}>  
          Hi ! Welcome
          <br></br>
          
          Please Choose your Fuel
        </div>
        <br></br>
        <br></br>
        <Stack style={{marginTop:100}} spacing={2} direction="row">
            <CustomButton><Link to="/petrol" style={{color:"white",textDecoration: "none"}}>Petrol</Link></CustomButton>
            <CustomButton style={{marginTop:10}} ><Link to="/diesel" style={{color:"white",textDecoration: "none"}}>Diesel</Link></CustomButton>
         </Stack>
          </header> 
    </div>
  );
}

export default App;
