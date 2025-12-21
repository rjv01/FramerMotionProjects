import { MessageSquareText, X } from "lucide-react"
import { useState } from "react";
import { motion } from "framer-motion";

function Card() {
    const [open,setOpen] = useState(true);
    return (
        <div className="min-h-screen flex justify-center items-center">
            {open && (
                <div className="flex flex-col justify-center items-center h-155 w-102 bg-white border rounded-lg">
                    {/* <div className="flex flex-col p-4"> */}
                        <h1 className="font-bold text-2xl text-neutral-700">Raj UI Components</h1>
                        <p className="mt-3 text-neutral-500">A collection of beautiful UI components.Life is ENJOY</p>
                        <div 
                            className="flex justify-center items-center w-25 h-12 gap-4 px-4 mt-3 border"
                            onClick={() => setOpen(false)}
                        >
                            <button className="">Rjv01</button>
                            <X className="w-6 h-6"></X>
                        </div>
                    {/* </div> */}
                    <motion.div 
                        style={{
                            
                        }}
                        className="flex flex-col items-center bg-green-500 h-105 w-90 rounded-lg divide-y p-4 m-6">
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
            )}
        </div>
    );
}

export default Card
