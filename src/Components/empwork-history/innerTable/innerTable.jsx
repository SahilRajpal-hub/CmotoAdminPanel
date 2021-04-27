import React ,{useEffect,useState}from "react";

const InnerTable=({Prove})=>{
    const vehicleNum=Object.keys(Prove);
    const Images=Object.values(Prove);

    // console.log(vehicleNum);
    // console.log(Images[0]['Image Url 0'])
    return (
        <table className="table table-sm table-bordered table-responsive-xl">
        <tbody>
       { vehicleNum.map((el,i)=>{
        if(vehicleNum[i]==="income")return( <tr>
            <td style={{width:"30%"}}>{vehicleNum[i]}</td>
           <td colspan="2">{Images[i]}</td>
            </tr>)
        return(
            <tr>
            <td style={{width:"30%"}}>{vehicleNum[i]}</td>
            <td>{Images[i]['Image Url 0']?<a target="__blank__" href={Images[i]['Image Url 0']}>Go to image</a>:<div>No Image</div>}</td>
            <td>{Images[i]['Image Url 1']?<a target="__blank__" href={Images[i]['Image Url 1']}>Go to image</a>:<div>No Image</div>}</td>
            </tr>
       )})
       }
        </tbody>
        </table>
    )
}

export default InnerTable;