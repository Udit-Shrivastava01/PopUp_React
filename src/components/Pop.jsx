
function Pop({ func, action }) {
  return (
    <>
      <div className="absolute bg-black/10 h-screen w-screen flex flex-col items-center justify-center">

        <button 
        onClick={() => func(false)} 
        className='absolute bg-[rgb(27,27,27)] h-10 w-10 top-[1rem] right-[1rem] flex items-center justify-center rounded-lg'>❌</button>

        <div className="m-10 bg-[rgb(27,27,27)] h-full max-h-[300px] w-full max-w-[500px] flex flex-col items-center justify-center p-10 rounded-2xl max-[400px]:h-[200px]">

          <h1 className="text-4xl mb-8">{action}?</h1>

          <p className="mb-5">Are you sure to {action}?</p>

          <div className="flex gap-10 mt-4">

            <button 
            className="bg-green-500 p-4 rounded-2xl">Yes</button>

            <button 
            className="bg-red-500 p-4 rounded-2xl ">No</button>
            
          </div>
        </div>
      </div>
    </>
  )
}
export default Pop;