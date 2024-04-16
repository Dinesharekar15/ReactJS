
import './App.css';
import Counter from './component/Counter';
import { useContext } from 'react';
import { Countercontext } from './context/CounterContext';

function App() {

     const counterstate=useContext(Countercontext);
     console.log(counterstate);
    return (
        <>
            <h1>Counter is: {counterstate.counter}</h1>
            <Counter />
        </>
    );
}

export default App;

