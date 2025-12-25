import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress,"change",(latest)=>{
        console.log(latest);
    });

    const background = useTransform(
        scrollYProgress,
        [0,1],
        ["red","orange"]
    );

    return (
        <div className="h-[300vh] bg-neutral-700 flex justify-center">
            <h1 className="text-4xl text-white font-mono">Scroll.....</h1>
            <motion.div
                style={{
                    scale:scrollYProgress,
                    background,
                    x:"-50%",
                    y:"-50%",
                }}
                className="fixed left-1/2 top-1/2 h-4 w-screen bg-indigo-500"
            ></motion.div>
        </div>
    );
};

export default ScrollProgress
