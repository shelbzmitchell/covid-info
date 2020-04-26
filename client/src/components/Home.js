import React, { Component } from "react";
import Axios from "axios";


export default class Home extends Component () {
    recoverr = 
    Axios.get
    ("http://localhost:5000/api/recovery/").then(res => {
console.log(res.data);
   })
   
    render () {
        return (
            <>
        <div className="home__header">
            hello
        </div>

        
        </>
    );
}
}
