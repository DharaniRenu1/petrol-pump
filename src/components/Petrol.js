import React, { useEffect, useState } from 'react';
import './../App.css';
import { useTimer } from "../Hooks/useTimer";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom'  
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


function Petrol() {
  const petrolprice = 1.69;
  const [price, setprice] = useState(1.69);
  const {  litre, start, stop } = useTimer();
  
  const [pending, setPending] = useState(true)
  const [block, setblock] = useState(false)

  const navigate = useNavigate()


   useEffect(()=>{
    setprice((litre * petrolprice).toFixed(2));
   }, [litre])

   const handleClick = () =>{
    localStorage.setItem("amount", price)

    stop();
    setblock(true)
    localStorage.setItem("fueltype", "Petrol");
    localStorage.setItem("litre", litre);
    localStorage.setItem("pprice", petrolprice);
    navigate('/pay', { state: { price: price } })


   }

   const starthandle = () =>{
    start();
    setPending(false);
    setblock(true)

   }

  return (
    <div className="App">
         <h1 style={{color:"#01295c", fontWeight:"Bold", fontSize: 50, marginTop:40}}>Petrol</h1> 
        <header className="App-header">
        <div style={{marginTop:-300, color:"#006837", fontWeight:"Bold", fontSize: 50,}}>  
          Price : <span style={{marginTop:-300, color:"#01295c", fontWeight:"Bold", fontSize: 50,}}>  £{price} </span>

          <br></br>
          <div style={{marginTop:20}}>
          Litre : <span style={{marginTop:-300, color:"#01295c", fontWeight:"Bold", fontSize: 50,}}> {litre} in (l) </span>

          </div>
        </div>
          
          <br></br>

          <Stack style={{marginTop:100}} spacing={2} direction="row">
            <CustomButton  disabled={block}  onClick={starthandle }>Start</CustomButton>
            <CustomButton  style={{marginTop:10}}  disabled={pending}  onClick={handleClick}>Stop</CustomButton>

          </Stack>
          <br></br>

          <Stack >
            <CustomButton  disabled={block} ><Link to="/" style={{color:"white", textDecoration: "none"}}>Home</Link></CustomButton>
          </Stack>
        </header>
    </div>
  )
}

export default Petrol