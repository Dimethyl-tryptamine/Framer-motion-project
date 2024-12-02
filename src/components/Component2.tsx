import {motion, Variants, useAnimation} from "framer-motion"
import { useState } from "react";
const Component2 = () => {
    const [] = useState();

   

   const animationVariants: Variants = {
        initial: {
            scale: 1,
            rotate: 0,
            x:0,
            y:0,
        },
        animate: {
            scale: [1, .5, 1, 2, 1],
            rotate: [360, 0, 360,],
            x: [0, -200,  0],
            y: [0, 200,  0],
            transition: {
                duration: 2,
                
            },
        },
    }

  
    // Initialize animation controls
    const controls = useAnimation();

    // Function to start the animation
    const startAnimation = () => {
    controls.start('animate'); // Start the animation
    };

   
  








    return (
        <div className="w-[100%] h-[100%] flex relative ">

            <motion.button className='p-3 text-[1.5rem] m-auto  justify-center mt-[20px] rounded-lg bg-[blue] hover:bg-[white] hover:text-[black] '

             onClick={startAnimation}

             whileHover={{
                scale: 1.05
             }}
             whileTap={{
                scale: 0.95,
                rotate: "2.5deg",
             }}
             transition={{
                duration: .125,
                ease: "easeInOut",
             }}>Animate

            </motion.button>
            
               
            

            <motion.div className="bg-[black] top-[20%] right-[20%] absolute rounded-lg h-[100px] w-[100px]"
            
            
            variants={animationVariants}
            initial="initial"
            animate = {controls}>
            </motion.div>


            
        </div>
    )
}

export default Component2;