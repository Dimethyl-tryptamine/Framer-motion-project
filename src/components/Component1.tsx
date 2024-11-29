import {motion} from "framer-motion"
import { useState } from "react";
const Component1 = () => {
    const [isVisible,setIsVisible] = useState(true);

   const handlelClick = () => {
    setIsVisible(!isVisible);
    
   }









    return (
        <div className="w-[100%] h-[100%] flex relative ">

            <button className='p-3 text-[1.5rem] m-auto  justify-center mt-[20px] rounded-lg bg-[blue] hover:bg-[white] hover:text-[black] '

             onClick={handlelClick}>Show/Hide

            </button>
            
            
               
            

            <motion.div className="bg-[black] top-[20%] right-[20%] absolute rounded-lg h-[100px] w-[100px]"
            
                initial={{
                    opacity: 1
                }}
                
                animate={isVisible ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" }}>
                    
            </motion.div>


            
        </div>
    )
}

export default Component1;