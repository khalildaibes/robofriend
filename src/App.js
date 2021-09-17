import React, { Component } from "react";
import { render } from "react-dom";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

onSearchChanged=(event)=>{
    this.setState({searchfield: event.target.value});
    
}

    render() {
        
    const filterdRobots = this.state.robots.filter(robots => {
        return  robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                 
    })
        return (
            <div className='tc'>
                <h1> ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChanged}/>
                <CardList robots={filterdRobots} />
            </div>
        );

    }

}

export default App;