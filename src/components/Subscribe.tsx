import { motion } from "framer-motion";

function Subscribe() {
  return (
    <div 
        className="[prespective::1000px] [transform-3d] min-h-screen flex justify-center items-center bg-neutral-900"
        style={{
            backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
            backgroundSize: `8px 8px`,
            backgroundRepeat: `repeat`,
        }}
    >
      <motion.button
        whileHover={{
            rotateX:25,
            rotateY:10,
            boxShadow:"0px 20px 50px red",
        }}
        style={{
            translateZ:100,
        }}
        transition={{
            duration:0.3,
            ease: "easeInOut",
        }}

        className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer"
        >
            <span className="group-hover:text-red-500 text-xl transiton-colors duration-300">Subscribe</span>
        <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-red-500 to-transparent h-px w-3/4 mx-auto "></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-linear-to-r from-transparent via-red-500 to-transparent h-1 w-3/4 mx-auto blur-sm"></span>
      </motion.button>
    </div>
  )
}

export default Subscribe
