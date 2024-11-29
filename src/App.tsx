import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import Component3 from "./components/Component3"
import './index.css'

function App() {
  

  return (
    <>
      <div className='flex flex-col'>


        <div className='bg-[red]  m-4 flex  items-center justify-center border-solid border-gray-700 rounded-lg border-[2px] w-[70vw] h-[70vh]'>
          <div className="bg-[gray] w-[90%] flex  rounded-lg h-[90%] ">
            <Component1/>
          </div>
        </div>




        <div className='bg-[blue]  m-4 flex border-solid justify-center items-center border-gray-700 rounded-lg border-[2px] w-[70vw] h-[70vh]'>
          <div className="bg-[gray] w-[90%] flex  rounded-lg h-[90%] ">
            <Component2/>
          </div>
        </div>





        <div className='bg-[yellow]  m-4 flex justify-center items-center border-solid border-gray-700 rounded-lg border-[2px] w-[70vw] h-[70vh]'>
          <div className="bg-[gray] w-[90%] h-[90%]  relative rounded-lg ">
          <Component3/>
          </div>
    
        </div>





        <div className='bg-[green]  m-4 flex justify-center border-solid border-gray-700 rounded-lg border-[2px] w-[70vw] h-[70vh]'>
    
        </div>

        <div className='bg-[purple]  m-4 flex justify-center border-solid border-gray-700 rounded-lg border-[2px] w-[70vw] h-[70vh]'>
    
        </div>

        <div className='bg-[orange]  m-4 flex justify-center border-solid border-gray-700 rounded-lg border-[2px] w-[70vw] h-[70vh]'>
    
        </div>
      </div>
      
      
      
    </>
  )
}

export default App
