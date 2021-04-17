import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import './table-item.styles.css'



// a.map((element)=><h4>{element}</h4>)
const TableItem=({vehicle,apartment})=>{
   const a=Object.keys(vehicle)
   const b=Object.values(vehicle)

    return(
        <>
            <Table bordered >
            <tbody>
            {a.map((element,i)=>(
                <tr className={`${b[i].Payment} `}>
                    <td  style={{fontSize:14,color:'black',textAlign:"center"}}><Link to={`/carinfo?area=${apartment}&carnum=${element}`}>{element}</Link></td>
                </tr>
            ))} 
        </tbody>
            </Table>
        </>
    )
}

export default TableItem;

