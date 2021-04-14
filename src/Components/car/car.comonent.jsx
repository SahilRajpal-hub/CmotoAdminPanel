import React from 'react'
import firebase from '../../firebase/firebase.utils.js'

class Car extends React.Component{
    constructor(){
        super();
        this.state={
          societies:null
        }
        
    }

    componentDidMount(){
        firebase.database().ref('cars').on("value",snaphot=>{
        this.setState({societies:snaphot.val()});
       },err=>{
        console.log(err);  
       })
    }

    render(){
        const societies=this.state.societies;
        console.log(societies);
        return (
            // for (let key in societies) {
            //     // const value=societies[key];
            //     <h1>{key}</h1>
            // }
            1
        );
    }
};
 

export default Car;
