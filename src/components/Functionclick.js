import React from 'react'

const Functionclick = () => {
    const clickHandler = ()=>{
        console.log("button clicked ")
    }
  return (
    <>
        <h3>Event Handling</h3>
        <ul>
            <li>This section studies <strong>onClick</strong> event in Functionclick component.</li>
            <li>Unlike JS, event names are used in camelcase in React. </li>
            <li><strong>Function used in event handling must be inside curly braces and it MUST BE THE FUNCTION NAME and NOT A FUNCTION CALL.</strong></li>
            <li>Event handling in class components is similar to functional components - we just have to use <strong>this</strong> keyword for the event function. </li>
            <li><button onClick={clickHandler}>Button</button></li>
        </ul>
    </>
  )
}

export default Functionclick