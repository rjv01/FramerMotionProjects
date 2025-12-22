import { MessageSquareText, X } from "lucide-react"
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

function Card() {
    const [open,setOpen] = useState(true);
    return (
        <div className="min-h-screen flex justify-center items-center">
            <AnimatePresence>
            {open && (
                <motion.div
                    exit={{
                        opacity:0,
                        scale:0.98,
                        filter:"blur(10px)"
                    }}
                    transition={{
                        duration:0.3,
                        ease:"easeInOut"
                    }}
                    className="flex flex-col justify-center items-center h-120 w-60 p-2 sm:h-155 sm:w-102 bg-white border border-neutral-300 rounded-lg
                    shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                >
                    {/* <div className="flex flex-col p-4"> */}
                        <h1 className="font-bold text-2xl text-neutral-700">Raj UI Components</h1>
                        <p className="mt-3 text-neutral-500">A collection of beautiful UI components.Life is ENJOY</p>
                        <div 
                            className="flex justify-center items-center w-25 h-12 gap-4 px-3 mt-3 border border-neutral-200 rounded-2xl cursor-pointer duration-150 shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                            onClick={() => setOpen(false)}
                        >
                            <button>Rjv01</button>
                            <X className="w-6 h-6"></X>
                        </div>
                    {/* </div> */}
                    <div 
                        style={{
                            
                        }}
                        className="relative flex flex-col items-center h-70 w-53 sm:h-105 sm:w-90 bg-gray-100 border border-dashed border-neutral-200  rounded-lg p-4 m-6 shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale:0.98,
                                filter:"blur(10px)"
                            }}
                            whileHover={{
                                opacity:1,
                                scale:1.05,
                                filter:"blur(0px)"
                            }}
                            transition={{
                                duration:0.3,
                                ease:"easeInOut"
                            }}
                            className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200">
                            <div className="flex items-center gap-4 p-6 ">
                                <div className="bg-yellow-500 p-2 rounded-lg">
                                    <MessageSquareText className="h-7 w-6"/>
                                </div>
                                <div>
                                    <p className="font-bold text-md text-neutral-700">Raj UI Components</p>
                                    <p className="text-neutral-500">A collection of UI components</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6">
                                <div className="bg-yellow-500 p-2 rounded-lg">
                                    <MessageSquareText className="h-7 w-6"/>
                                </div>
                                <div>
                                    <p className="font-bold text-md text-neutral-700">Raj UI Components</p>
                                    <p className="text-neutral-500">A collection of UI components</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6">
                                <div className="bg-yellow-500 p-2 rounded-lg">
                                    <MessageSquareText className="h-7 w-6"/>
                                </div>
                                <div>
                                    <p className="font-bold text-md text-neutral-700">Raj UI Components</p>
                                    <p className="text-neutral-500">A collection of UI components</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6">
                                <div className="bg-yellow-500 p-2 rounded-lg">
                                    <MessageSquareText className="h-7 w-6"/>
                                </div>
                                <div>
                                    <p className="font-bold text-md text-neutral-700">Raj UI Components</p>
                                    <p className="text-neutral-500">A collection of UI components</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

export default Card
