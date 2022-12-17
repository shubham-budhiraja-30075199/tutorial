import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return(
            <>
                <h3>Class Based Components</h3>
                <ul>
                    <li>This content is coming from a Class Based Comoponent (Welcome)</li>
                    <li>Whenever we have a choice, it is prefered to use functional component over class component.</li>
                </ul>
            </>
        ) 
    }
}

export default Welcome 