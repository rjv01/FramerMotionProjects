import React from "react";
import { motion,AnimatePresence } from "framer-motion";
import { ArrowBigRight } from "lucide-react";

function Sidebar() {
    const [open,setOpen]=React.useState(false);

    const containerVariants={
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
            transition:{
                staggerChildren:0.15,
            },
        },
    };

    const itemVariants={
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
            x:0,
        }
    }

    const links = [
        {href:"#",label:"Home"},
        {href:"#",label:"Analytics"},
        {href:"#",label:"Users"},
        {href:"#",label:"Settings"},
    ]
    return (
        <div className="min-h-screen bg-neutral-800 flex justify-center items-center">
            <motion.div className="relative bg-red-600 h-150 w-120 rounded-lg shadow-lg flex flex-col">
                <div className="absolute bg-black h-150 w-60 rounded-r-2xl">
                    <button
                        className="absolute left-48 top-2 hover:scale-110 duration-100 bg-white border border-neutral-400 p-2 rounded-full cursor-pointer"
                        onClick={()=>setOpen(!open)}
                    ><ArrowBigRight /> </button>
                    <AnimatePresence>
                    {
                        open && (
                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="flex flex-col p-4 m-4 gap-5 sm:gap-10 text-xl">
                                {
                                    links.map((link,i)=>(
                                        <motion.a
                                            variants={itemVariants}
                                            key={i}
                                            whileTap={{}}
                                            href={link.href}
                                            className="text-blue-500 bg-blue-800/30 border border-blue-400 p-3 text-center rounded-2xl mt-8"
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))
                                }
                            </motion.div>
                        )
                    }
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

export default Sidebar;
