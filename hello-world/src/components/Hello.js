import React, { createElement } from 'react'
const Hello = () =>
{
    
    return React.createElement('div', {className:"dummyclass"}, React.createElement('h1', null, 'Hello dummy'))
    
}

export default Hello