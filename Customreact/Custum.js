
function creatElement(reactElement,Container){
    // const Element = document.createElement(reactElement.type)
    // Element.innerHTML=reactElement.children
    // Element.setAttribute('href',reactElement.props.href)
    // Element.setAttribute('target',reactElement.props.target)
    // Container.appendChild(Element)
    const Element = document.createElement(reactElement.type)
    Element.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop==='Children')continue
        Element.setAttribute(prop,reactElement.props[prop])
    }
    
    Container.appendChild(Element)
    
}


const reactElement={
    type:'h1',
    props:{
        className: 'heading-style', 
        style: { color: 'red' },
    },
    children:'Dinesh Arekar'
}

const mainCointainer=document.getElementById('root')

creatElement(reactElement,mainCointainer)