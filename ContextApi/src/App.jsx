
import './App.css';
// import Counter from './component/Counter';
import { useContext } from 'react';
// import { Countercontext } from './context/CounterContext';
import Card from './component/Card';
import Addedcard from './component/Addedcard';

function App() {

    //  const counterstate=useContext(Countercontext);
    //  console.log(counterstate);
    // return (
    //     <>
    //         <h1>Counter is: {counterstate.counter}</h1>
    //         <Counter />
    //     </>
    // );
    return(
        <>
            <Card 
                name="Iphone 12"
                price="1200"
            />
            <Card 
                name="samsumg s21"
                price="120"
            />
            <Card 
                name="infinix note 10"
                price="12"
            />
            <Addedcard />
        </>
    )
   

}

export default App;

