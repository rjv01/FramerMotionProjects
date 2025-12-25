import { motion,useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function UseInView() {
    const ref = useRef(null);
    const isInView = useInView(ref,{
        amount:"all",
    });

    useEffect(()=>{
        // console.log(`Element ${isInView} ? "is" :"is not" in view`);
    },[isInView]);

    return (
        <div className="h-[250vh] flex justify-center items-center bg-linear-to-r from-blue-400 to-purple-300">
            <div 
                ref={ref} 
                className="relative mx-auto grid h-32 w-96 place-content-center"
            >
                <h1 className="relative z-0 text-3xl font-black uppercase">Show me on Scroll</h1>
                <motion.div
                    animate={{
                        y: isInView ? "-80%":"0%"
                    }}
                    className="absolute bottom-0 left-0 top-0 z-10 w-1/3 bg-indigo-500 rounded-l-2xl"></motion.div>
                <motion.div
                    animate={{
                        y: isInView ? "100%":"0%"
                    }}
                    className="absolute bottom-0 left-1/3 top-0 z-10 w-1/3 bg-indigo-500 "></motion.div>
                <motion.div
                    animate={{
                        y: isInView ? "-100%":"0%"
                    }}
                    className="absolute bottom-0 left-2/3 top-0 z-10 w-1/3 bg-indigo-500 rounded-r-2xl"></motion.div>
            </div>
        </div>
    );
};

export default UseInView
