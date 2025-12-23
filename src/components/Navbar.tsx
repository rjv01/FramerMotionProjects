import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Link={
    name:string,
    href:string
}

function Navbar() {

    const links:Link[] = [
        {
            name:"Home",
            href:"#"
        },
        {
            name:"About",
            href:"#"
        },
        {
            name:"Projects",
            href:"#"
        },
        {
            name:"Login",
            href:"#"
        },
        {
            name:"Reister",
            href:"#"
        },
    ];
    
    const [hovered,setHovered] = useState<number | null>(null);

    return (
        <div className="min-h-screen py-40 bg-neutral-600">
            <div
                className="max-w-xl mx-auto bg-gray-200 flex px-4 py-2 text-xl  rounded-full"
            >
                {
                    links.map((link,index) => (
                        <Link
                            onMouseEnter={()=>setHovered(index)}
                            onMouseLeave={()=>setHovered(null)}
                            className="w-full text-center text-neutral-400 relative py-3 hover:text-white duration-200"
                            key={index}
                            to={link.href}
                        >
                            { hovered === index && 
                                <motion.div
                                    layoutId="hover"
                                    className="absolute inset-0 rounded-full bg-black w-full h-full"
                                >
                                </motion.div>}
                            <span className="relative ">{link.name}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Navbar
