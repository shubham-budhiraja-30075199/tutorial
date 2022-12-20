import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    // increment(){
    //     this.setState=({
    //         count : this.state.count + 1
    //     })
    // }

    render(){
        return(
            <>
                <h3>Understanding States</h3>
                <ul>
                    <li>This content is coming from a Class Based Comoponent (Message)</li>
                    <li>In class components, states are initialised inside the class constructor.</li>
                    <li>Within the constructor, we first call the <strong>super</strong> because we are extending the class <strong>Component</strong></li>
                    <li>Then we create our state object using <strong>this</strong> keyword</li>
                    <li>Ex: count the number of clicks on <span onClick={() => this.setState({count:this.state.count + 1}, ()=>{console.log(this.state.count)})}>Button</span> are {this.state.count}.</li>
                    <li><strong>Whenever we have to execute a code after updating the state, we must do it in the setState statement. The setState statement also 
                        has an optional argument i.e., a callback  function.</strong></li>
                    <li>We can also pass props in the setState function by defining it as a function argument. Ex: {"this.setState((props)=>{...})"}</li>
                </ul>
            </>
        ) 
    }
}

export default Message 