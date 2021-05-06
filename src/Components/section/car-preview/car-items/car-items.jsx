import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import './car-items.styles.css'



const CarItem=({vehicles,address,carInAppartment})=>{
   const carnums=Object.keys(vehicles)
   const cardetails=Object.values(vehicles)

   carInAppartment(carnums.length);

    return(
        <>
            <Table bordered style={{maxWidth:"400px"}} >
            <tbody>
            {carnums.map((carnum,i)=>(
                <tr className={`${cardetails[i].Payment} `} >
                    <td style={{textAlign:"center"}}><Link style={{fontSize:14,color:'black',textAlign:"center"}} to={`/carinfo?area=${address}&carnum=${carnum}`}>{carnum}</Link></td>
                </tr>
            ))} 
        </tbody>
            </Table>
        </>
    )
}

export default CarItem;

