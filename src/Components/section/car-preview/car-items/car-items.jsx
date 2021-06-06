import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import './car-items.styles.css'



const CarItem=({vehicles,address,carInAppartment})=>{
   const carnums=Object.keys(vehicles)
   const cardetails=Object.values(vehicles)

   carInAppartment(carnums.length);

    return(
        
        <div>
            <Table bordered style={{marginBottom:0}} >
            <tbody>
            {carnums.map((carnum,i)=>(
                <tr key={carnum} className={cardetails[i].Active ? "Active":"Inactive"} >
                    <td style={{textAlign:"center"}}>  <Link   style={{fontSize:14,color:'black',textAlign:"center"}} to={`/carinfo?area=${address}&carnum=${carnum}`}>{carnum}</Link></td>
                </tr>
            ))} 
            </tbody>
            </Table>
        </div>
    )
}

export default CarItem;

