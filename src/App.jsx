import { useState } from 'react'
import './App.css'
import Pop from './components/Pop'

function App() {
  const [pop, setPop] = useState(false)
  const [action, setAction] = useState('')

  return (
    <>
      <div className='min-h-screen flex gap-5 justify-center items-center'>
        {pop &&
          <Pop
            func={setPop}
            action={action}
          />}

        <button onClick={() => {
          setPop(true)
          setAction("Delete");
        }}
          className='bg-[#DBF3FA] right-10 p-2 rounded-[5px] border-2 border-[#7AD7F0] text-black'>Delete</button>

        <button onClick={() => {
          setPop(true)
          setAction("Update");
        }}
          className='bg-[#DBF3FA] right-10 p-2 rounded-[5px] border-2 border-[#7AD7F0] text-black'>Update</button>

      </div>
    </>
  )
}

export default App
