import React from 'react'
import ReactDOM from 'react-dom/client'

const reacrtElement=React.createElement(
    
    'H1',
    {style:{color:'red'}},
    'Dinesh Arekar',
     
)

const element=document.getElementById('root')
const root=ReactDOM.createRoot(element)
root.render(
    reacrtElement
)


