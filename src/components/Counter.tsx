import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Counter() {
    const [counter,setCounter] = useState<number>(0);
    return (
        <div className="min-h-screen flex justify-center items-center bg-neutral-800">
            
                <div
                    className="flex border-2 border-blue-500 rounded-lg p-6 items-center">
                    <ArrowBigUp
                        onClick={()=>setCounter(c => c+1)}
                        className="text-green-500 m-4 cursor-pointer hover:scale-110 duration-100" size={48}
                        />
                    <AnimatePresence mode="wait">
                        {
                            <motion.span
                            key={counter}
                            initial={{ opacity:0, y:-20}}
                            animate={{ opacity:1, y:0}}
                            exit={{ opacity:0, y:20}}
                            transition={{ duration: 0.3 , ease:"easeInOut"}}
                            className="text-6xl text-white mx-6">{counter}</motion.span>
                        }
                    </AnimatePresence>
                    <ArrowBigDown
                        onClick={()=>setCounter(c => c-1)}
                        className="text-red-500 m-4 cursor-pointer hover:scale-110 duration-100" size={48}
                    />
                </div>
        </div>
    );
}

export default Counter
