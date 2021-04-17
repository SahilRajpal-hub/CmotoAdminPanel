import React from 'react'
import TableItem from '../table-item/table-item.jsx'
import './table.preview.css'
import Table from 'react-bootstrap/Table'

const TablePreview=({societies,area})=>{
 
    const a=Object.keys(societies);
    const b=Object.values(societies);

  return(
      <>
      <Table bordered>
          <thead >
          <tr >
              {a.map((element)=>(
                <th className="heading" style={{fontSize:15,color:'black',textAlign:"center"}}>{element}</th>
              ))}
          </tr>
          </thead>
          <tbody>{b.map((element,i)=>(
           <td> <TableItem apartment={`${area}/${a[i]}`} vehicle={b[i]} /></td>
          ))}
          </tbody>
       
      </Table>
      </>
  )

}

export default TablePreview;