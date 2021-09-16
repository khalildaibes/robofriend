import React, { Component } from "react";
import './Hello.css';
class Hello extends Component {
    render() {
        
        return (
        <div className='tc'>
         <h1 > Hello wrold!!! </h1>
        <p>welcome to this fockiing website </p>
        <p>{this.props.greeting}</p>
        </div>

        );
    }

}


export default Hello;