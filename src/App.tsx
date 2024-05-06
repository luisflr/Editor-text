import './App.css'
import BoldIcon from './assets/icons/BoldIcon'
import IncraseTextIcon from './assets/icons/IncraseTextIcon'
import ItalicIcon from './assets/icons/ItalicIcon'
import UnderlineIcon from './assets/icons/UnderlineIcon'

function App() {

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

  return (
    <section className='h-screen w-full flex justify-center items-center'>
      <div className='h-full flex flex-col items-center py-20 '>
        <h1 className='text-4xl mb-12'> My First <span className='font-bold'>Text Editor </span></h1>
        <div className='flex w-full items-center justify-center mb-6'>
          {buttons.map(button =>
          <div key={`button-${button.name}`} className='flex flex-col items-center w-[80px] h-[100px] text-center'> 
            <button className='cursor-pointer'>
              {button.icon}
            </button>
          </div>
          )}
        </div>
        <textarea className='bg-[#F9F9F9] w-[600px] min-h-[200px] border-none outline-none p-4 rounded-lg'>

        </textarea>
      </div>
      
    </section>
  )
}

export default App
