
import {animate, easeInOut, motion} from "framer-motion"






const Component3 = () => {










    return(
        <>

            
            <div className="flex justify-center"><motion.button className="p-2 bg-[blue] rounded-lg inline-flex justify-center absolute top-[4%]  transition-transform items-center hover:bg-white hover:text-black hover:scale-[1.05] " 
            whileTap={{ rotate: 10,
                transition: {
                    duration: 1,
                    
                }
                
             }}>
                this is the button


            </motion.button></div>
            






            <motion.div className="bg-black h-[100px] w-[100px] absolute top-[20%] right-[20%] rounded-lg"> </motion.div>





        </>

    )
}


export default Component3;