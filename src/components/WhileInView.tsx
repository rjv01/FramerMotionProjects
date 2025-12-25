import { motion } from "framer-motion";

function WhileInView() {
  return (
    <div className="h-[300vh] flex jusitfy-center items-center bg-neutral-700">
        <div className="relative mx-auto grid h-32 w-96 place-content-center">
            <h1 className="relative z-0 text-3xl font-black uppercase underline">
                Show me on Scroll
            </h1>
            <motion.div
                initial={{
                    opacity:1,
                }}
                whileInView={{
                    opacity:0,
                }}
                viewport={{
                    // amount:"all",
                    margin:"-200px",
                    // once:true
                }}
                className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-indigo-500 rounded-xl"
            ></motion.div>
        </div>
    </div>
  )
}

export default WhileInView
