import { useRef } from 'react';

import BoldIcon from './assets/icons/BoldIcon'
import IncraseTextIcon from './assets/icons/IncraseTextIcon'
import ItalicIcon from './assets/icons/ItalicIcon'
import UnderlineIcon from './assets/icons/UnderlineIcon'
import './App.css'

function App() {

  const textRef = useRef<any>(null)

  const buttons = [
    {
      name: 'bold',
      icon: <BoldIcon wrapperClassName='w-7 h-7'/> ,
      label: 'Bold'
    },
    {
      name: 'italic',
      icon: <ItalicIcon wrapperClassName='w-7 h-7'/>,
      label: 'Italic'
    },
    {
      name: 'underline',
      icon: <UnderlineIcon wrapperClassName='w-7 h-7'/>,
      label: 'Underline'
    },
    {
      name: 'increase-text',
      icon: <IncraseTextIcon wrapperClassName='w-8 h-8 text-black'/>,
      label: 'Increase Text'
    },
    // {name: 'decrease-text', icon: ''},
    // {name: 'color', icon: ''},
  ]

  // useEffect(() => {
  //   arrRefs.current = arrRefs.current.slice(0, buttons.length)
  // }, [])

  const handleClick = () => {
    if (textRef.current !== null && textRef.current !== undefined) textRef.current.style.fontWeight = 'bold'
  }

  return (
    <section className='h-screen w-full flex justify-center items-center'>
      <div className='h-full flex flex-col items-center py-20 '>
        <h1 className='text-4xl mb-12'> My First <span className='font-bold'>Text Editor </span></h1>
        <div className='flex w-full items-center justify-center mb-6'>
          {buttons.map((button) =>
            <button
              key={`button-${button.name}`}
              // onClick={button.action}
              onClick={handleClick}
              className='cursor-pointer w-[60px] h-[100px]'
            >
              {button.icon}
            </button>
          )}
        </div>
        <textarea
          ref={textRef}
          className='bg-[#F9F9F9] w-[600px] min-h-[200px] border-none outline-none p-4 rounded-lg'
        >

        </textarea>
      </div>
      
    </section>
  )
}

export default App
