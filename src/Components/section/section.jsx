import React from 'react'
import TablePreview from '../table-preview/table-preview.jsx'
import './section.css'
import Table from 'react-bootstrap/Table'


const Section=({area,societies})=>{

  return(
    <div className="Section">
      <Table bordered >
            <thead className="heading">
                <tr className="Align">
                    <th className="heading" style={{fontSize:20,color:'black',fontWeight:"700"}}>{area}</th>
                </tr>
            </thead>
            <tbody>
            <TablePreview area={area} societies={societies}/>
            </tbody>
      </Table>  
    </div>
  )

}

export default Section;

