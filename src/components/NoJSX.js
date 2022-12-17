import React from 'react';

const NoJSX = () => {
    return React.createElement('div', 
    null,
    React.createElement('h3', {id:"heading"}, 'No JSX Component'), 
    React.createElement('p',null,'While using this technique, we have to pass a minimum of 3 parameters - the parent container, additional properties (ex: props, id, class, etc. ) if that element is using any (null if nothing is used) and then a minimum of one child, which is being rendered inside the parent tag'))
}

export default NoJSX;