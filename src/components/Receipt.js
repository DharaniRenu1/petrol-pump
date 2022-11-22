import React from 'react'
import './../App.css'
import {useLocation} from 'react-router-dom';

function Receipt() {
    const location = useLocation();
    const date = new Date(location.state.date * 1000);

    const date1 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    const time = date.getHours()+":"+date.getMinutes();
    const fueltype = localStorage.getItem("fueltype")
    const totalprice = localStorage.getItem("amount")
    const litre = localStorage.getItem("litre")
    const pprice = localStorage.getItem("pprice")
  return (
    <div className="App">
        <header className="App-header">
            <p style={{fontSize:40, fontWeight: "bold", color:"#00205b"}}>RECEIPT DETAILS</p>
            <div>
                <p style={{fontSize:25}}>Gas Company Limited  <br></br><span style={{fontSize:15}}>15, kelle ST, Apex NYC</span> </p>
               
            </div>
      
            <table>
                <tbody>
                <tr>
                    <th style={{fontSize:15, textAlign: "left"}}>DATE</th>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th style={{fontSize:15, textAlign: "left"}}>TIME</th>
                </tr>
                <tr>
                    <td style={{fontSize:15, textAlign: "left"}}>{date1}</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td style={{fontSize:15, textAlign: "left"}}>{time} </td>
                </tr>
                <tr>
                    <td style={{fontSize:15, textAlign: "left"}}>Trans ID#</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td style={{fontSize:15, textAlign: "left"}}>{location.state.transid} </td>
                </tr>
                <tr>
                    <td style={{fontSize:15, textAlign: "left"}}>Auth#</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td style={{fontSize:15, textAlign: "left"}}>904160 </td>
                </tr>
                </tbody>               
            </table>            
            <h5 style={{fontSize:15, textAlign:"left"}}>ACCOUNT NUMBER             <p style={{fontSize:15}}>XXXXXXXXXXXX {location.state.last4}</p></h5>
            <table>
                <tbody>
                <tr>
                <th style={{fontSize:15, textAlign: "left"}}>PUMP</th>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <th style={{fontSize:15, textAlign: "left"}}>FUEL TYPE </th>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                    <th style={{fontSize:15, textAlign: "left"}}>£/L</th>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                </tr>
                <tr>
                    <td style={{fontSize:15, textAlign: "center"}}>02</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td style={{fontSize:15, textAlign: "center"}}>{fueltype}</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                    <td style={{fontSize:15, textAlign: "center"}}>£ {pprice}</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                </tr>
               
                </tbody>               
            </table>         
            <table>
                <tbody>
                <tr>
                    <th style={{fontSize:15, textAlign: "left"}}>LITERS</th>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <th style={{fontSize:15, textAlign: "left"}}>FUEL TOTAL</th>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>


                </tr>
                <tr>
                    <td style={{fontSize:15, textAlign: "center"}}>{litre}</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td style={{fontSize:15, textAlign: "center"}}>{totalprice}</td>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

                </tr>
               
                </tbody>               
            </table>
            <p style={{fontSize:25}}>THANK YOU! <br></br><span style={{fontSize:15}}> HAVE A NICE DAY </span> </p>

             

        </header>
    </div>
  )
}

export default Receipt
