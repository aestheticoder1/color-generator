import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [type, setType] = useState(true);
  // true means hex and false means rgb 
  const [color, setColor] = useState('#000000');
  const [first, setFirst] = useState(true); // Track if it's the first render

  function handleClick() {
    if (type) {
      let c = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      setColor(c);
    }
    else {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let c = `rgb(${r}, ${g}, ${b})`;
      setColor(c);
    }

    // console.log(type);
  }

  useEffect(() => {
    if (first) {
      setFirst(false); // Skip the first render
      return;
    }
    handleClick();
  }, [type]);


  return (
    <div className={`w-full h-screen`} style={{ backgroundColor: color }}>
      <div className='flex justify-center items-start gap-8 pt-4'>
        <button onClick={() => setType(true)} className='text-white bg-gray-500 px-4 py-2 rounded-lg font-bold'>Hex Color</button>
        <button onClick={() => setType(false)} className='text-white bg-gray-500 px-4 py-2 rounded-lg font-bold'>RGB Color</button>
        <button onClick={handleClick} className='text-white bg-gray-500 px-4 py-2 rounded-lg font-bold'>Change Color</button>
      </div>

      <div className='text-center text-5xl font-bold mt-20'>
        {type ? 'Hex-Color' : 'RGB-Color'}
      </div>

      <div className='text-center text-5xl font-bold mt-20'>
        {type ? '#' + color.slice(1) : color}
      </div>
      
    </div>
  )
}

export default App