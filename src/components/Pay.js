import {React, useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import './Pay.css';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import {  useNavigate } from 'react-router-dom'  

import '../App.css'
import Stack from '@mui/material/Stack';




const blue = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
  };
  
  const CustomButton = styled(ButtonUnstyled)`
  font-family: url(./Fontspring-DEMO-proximanovacond-regular.otf);
   font-weight: bold;
    font-size: 2.475rem;
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
  
const CheckoutForm = () => {
    const amount = localStorage.getItem("amount");
    const [message, setmessage] = useState("")
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()

    const handleSubmit = async event => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      const payload = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
      });
      if(message == " ")
      {
        navigate('/receipt', {state:{date:payload.paymentMethod.created, transid: payload.paymentMethod.id, 
                               last4: payload.paymentMethod.card.last4 }})
        

      }
      else
      {
        setmessage(payload.error.message)
        setTimeout(()=> setmessage(" "),2000)
      }
  };

  return (
    
    <div className="App">
             

        <header className="App-header">

        <form  onSubmit={handleSubmit}>
        <p style={{color:"red"}}>{message}</p>
        <CardElement />

            <Stack spacing={2} direction="row">
                <CustomButton type="submit" disabled={!stripe} >Pay £{amount}</CustomButton>
          </Stack>
        </form>
        </header>
    </div>
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Pay = () => {
return(
    <>
        <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
   
   
)
 
};

export default Pay;