import { motion, useAnimation, Variants } from "framer-motion";
import { useState } from "react";

const Component3 = () => {
    const animationVariants: Variants = {
        initial: {
            scale: 1,
            rotate: 0,
            
        },
        animate: {
            scale: [1, 0.5, 1, 2, 1],
            backgroundColor: ["black", "white", "black", "red", "black"],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            },
        },
    };

    const controls = useAnimation();
    const [playingAnimation, setPlayingAnimation] = useState(false);

    const handleClick = () => {
        setPlayingAnimation((prev) => {
            const newState = !prev; // Toggle the state
            if (newState) {
                controls.start("animate"); // Start the animation if newState is true
            } else {
                controls.stop(); // Stop the animation if newState is false
            }
            return newState; // Return the updated state
        });
    };

    return (
        <>
            <div className="flex justify-center">
                <motion.button
                    className="p-2 bg-[blue] rounded-lg inline-flex justify-center absolute top-[4%]  transition-transform items-center hover:bg-white hover:text-black hover:scale-[1.05]"
                    onClick={handleClick}
                    whileHover={{
                        scale: 1.10,

                    }}
                    whileTap={{
                        scale: 0.95,
                        rotate: "2.5deg",
                    }}
                    transition={{
                        duration: 0.01,
                        ease: "easeInOut",
                    }}
                >
                    {playingAnimation ? "Stop Animation" : "Start Animation"}
                </motion.button>
            </div>

            
            <motion.div
                className="h-[100px] w-[100px] absolute top-[20%] right-[20%] rounded-lg"
                variants={animationVariants}
                initial="initial"
                animate={controls}
            >
            </motion.div>
        </>
    );
};

export default Component3;
