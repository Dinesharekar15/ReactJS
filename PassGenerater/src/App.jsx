import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [lenght, SetPasslenght] = useState(8);
  const [AllowNum, SetAllowNum] = useState(false);
  const [AllowChar, SetAllowChar] = useState(false);
  const [Passworld, SetPassworld] = useState('');

  const inputRef = useRef(null);

  const passgenerator = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let sym = '!@#$%^&*()?+_><~';
    if (AllowNum) {
      str += num;
    }
    if (AllowChar) {
      str += sym;
    }
    for (let i = 1; i <= lenght; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);

    }
    SetPassworld(pass);
  

  }, [lenght, AllowChar, AllowNum, SetPassworld]);

  useEffect(() => {
    passgenerator()
  }, [lenght, AllowNum, AllowChar, passgenerator])

  const copyToClipboard = useCallback(() => {
    inputRef.current.select();

    window.navigator.clipboard.writeText(Passworld)
  }, [ Passworld])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Passworld Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={Passworld}
            className='outline-none w-full py-1 
          px-3'
            placeholder='Passworld'
            readOnly
            ref={inputRef}

          />
          <button
            className='bg-blue-500 text-white px-4'
            onClick={copyToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className='cursor-pointer'
              onChange={(e) => SetPasslenght(e.target.value)}
            />
            <span>Length:{lenght}</span>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={AllowNum}
              onChange={() => { SetAllowNum((prev) => !prev) }}
            />
            <span>Number</span>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={AllowChar}
              onChange={() => { SetAllowChar((prev) => !prev) }}
            />
            <span>Special Char</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
