import { useAnimate,motion, easeInOut, stagger } from "framer-motion";
import { useEffect } from "react";
function AnimateText() {
    const [scope,animate] = useAnimate();

    useEffect(()=>{
        startAnimating();
    },[]);

    const startAnimating = ()=>{
        animate("span",
            //final start similar to animate={{ }}
            {
                opacity:1,
                filter:"blur(0px)",
                y:0
            },
            //transition={{ }} part
            {   
                duration:0.5,
                delay:stagger(0.04),
                ease:"easeInOut",
            }
        );
    }

    const text = "Welcome to rjv01 club.The first rule of rjv01 club is that you don't talk about rjv01 club. The second rule of rjv01 club is that you don't talk about rjv01 club.";
    return (
        <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-teal-500 to-orange-500">
        <div
            ref={scope}
            className="max-w-7xl mx-auto text-white italic font-mono font-bold text-5xl">
            {
                text.split(" ").map((word,index)=>(
                    <motion.span
                        initial={{
                            opacity:0,
                            filter:"blur(10px)",
                            y:0,
                        }}
                        key={index}
                        className="inline-block "
                    >
                        {word} &nbsp;
                    </motion.span>
                ))
            }
        </div>
        </div>
    );
}

export default AnimateText
