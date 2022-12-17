import React from 'react'

const Hello = () => {
    return(
        <>
            <h3>Function Based Components</h3>
            <ul>
                <li>This content is coming from a function based component (Hello)</li>
                <li>A functional component is a js function that accepts an input of properties (props) 
                    and returns HTML that describes the UI.</li>
                <li>The <strong>default</strong> keyword exports the only function present in our script. This allows 
                    us to use any name for the object while importing and calling the component. If we don't use the keyword 
                    then to import the component, we will have to use the function name used in the component enclosed 
                    in curly braces. ex: <strong>import {"{ Hello }"} from "./components/Hello"</strong></li>
            </ul>
        </>
    )
}

export default Hello 