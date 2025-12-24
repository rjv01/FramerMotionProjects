import { motion,useAnimate } from "framer-motion";

function SuccessButton1() {
  const [scope,animate] = useAnimate();
    const sequence:any = [
        [".loader", { opacity: [0, 1], width: "2rem" }, { duration: 0.1 }],
        [".loader", { rotate: 360 * 4 }, { duration: 2 }],
        [".loader", { opacity: [1, 0], width: "0rem" }, { duration: 0.1 }],
        [".text", { display: "none" }, { duration: 0.1,at:"-0.2" }],
        ["button", { width: "5rem", borderRadius: "1000px" }, { duration: 0.3 }],
        [
            "button",
            {
            scale: [1, 1.2, 0.8, 1],
            backgroundImage: "linear-gradient(to right,#00ff99,#00ccff)",
            },
            { duration: 0.5,at:"+0.2" },
        ],
        [".check-icon", { opacity: [0,1] }, { duration: 0.1}],
        [
            ".check-icon path",
            { pathLength: 1, strokeDashoffset: 0 },
            { duration: 0.3, ease: "easeInOut" },
        ],
    ];

    const startAnimating = async()=>{
        await animate(sequence);
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-black">
            <div
                ref={scope}
                className="relative h-20 w-70 flex items-center justify-center"
            >
                <motion.button
                    style={{
                        width:"30rem"
                    }}
                    onClick={startAnimating}
                    className="h-20 text-white flex justify-center items-center bg-linear-to-r from-purple-500 via-violet-600 to-indigo-500 rounded-lg font-medium text-xl cursor-pointer"
                >
                    <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="loader h-5 w-5 text-white shrink-0"
                        initial={{
                            width:"0rem"
                        }}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 3a9 9 0 1 0 9 9" />
                        
                    </motion.svg>
                    <span className="text">Purchase Now ($888)</span>
                </motion.button>
                
                <motion.svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                    strokeWidth={3}
                    className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
                    initial={{
                        opacity:0
                    }}
                >
                    <motion.path
                        initial={{ 
                            pathLength:0 
                        }} 
                        transition={{ 
                            duration:0.3, type:"tween", ease:"easeInOut" 
                        }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </motion.svg>
            </div>
        </div>
    );
}

export default SuccessButton1
