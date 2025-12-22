import { IconRocket } from "@tabler/icons-react";
import { useMotionTemplate, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

type Feature = {
    icon: React.ReactNode;
    title: string,
    description: string,
    content: React.ReactNode,
}
function Scroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:containerRef,
        offset:["start end","end start"]
    });

    const backgroundColor = ["#343434","#00193b","#05291c","#34001f"];
    const [background,setBackground] = useState(backgroundColor[0]);
    
    useMotionValueEvent(scrollYProgress,"change",(latest)=>{
        setBackground(backgroundColor[Math.floor(latest * backgroundColor.length)]);
    });

    const features:Feature[] = [
        {
            icon:<IconRocket className="w-8 h-8 text-neutral-200" />,
            title:"Emilia Clarke",
            description:"Framer Motion is built for performance from the ground up. It leverages the power of the Framer library to ensure smooth animations and interactions.",
            content:(
                <div>
                    <img 
                        src="/emilia.png" 
                        alt="img"
                        height={500}
                        width={500}
                        className="rounded-full"
                    />
                </div>
            ),
        },
        {
            icon:<IconRocket className="w-8 h-8 text-neutral-200" />,
            title:"Alia Bhatt",
            description:"Framer Motion is built for performance from the ground up. It leverages the power of the Framer library to ensure smooth animations and interactions.",
            content:(
                <div>
                    <img 
                        src="/alia.webp" 
                        alt="img"
                        height={500}
                        width={500}
                        className="rounded-full"
                    />
                </div>
            ),
        },
        {
            icon:<IconRocket className="w-8 h-8 text-neutral-200" />,
            title:"Kiara Advani",
            description:"Framer Motion is built for performance from the ground up. It leverages the power of the Framer library to ensure smooth animations and interactions.",
            content:(
                <div>
                    <img 
                        src="/kiara.webp" 
                        alt="img"
                        height={350}
                        width={350}
                        className="rounded-full"
                    />
                </div>
            ),
        },
        {
            icon:<IconRocket className="w-8 h-8 text-neutral-200" />,
            title:"Tripti Dimri",
            description:"Framer Motion is built for performance from the ground up. It leverages the power of the Framer library to ensure smooth animations and interactions.",
            content:(
                <div>
                    <img 
                        src="/tripti1.webp" 
                        alt="img"
                        height={500}
                        width={400}
                        className="rounded-full"
                    />
                </div>
            ),
        },
    ];
    return (
        <motion.div
            animate={{
                backgroundColor:background,
            }}
            transition={{
                duration:1,
                ease:"easeInOut",
            }}
            ref={containerRef}
            className="min-h-screen flex justify-center items-center bg-neutral-900">
            <div className="flex flex-col gap-10 max-w-4xl mx-auto py-20">
                {
                    features.map((feature,index)=>(
                        <Card key={index} feature={feature}/>
                    ))
                }
            </div>
        </motion.div>
    );
}

const Card = ({feature}:{feature: Feature}) => {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","end start"]
    });
    const translateContent = useSpring(
        useTransform(scrollYProgress,[0,1],[200,-300]),
        {
            stiffness:100,
            damping:30,
            mass:1
        }
    );
    const opactiyContent = useTransform(scrollYProgress,[0,0.5,1],[0,1,0]);
    const blur = useTransform(scrollYProgress,[0.5,1],[0,10]);
    const scale = useTransform(scrollYProgress,[0.5,1],[1,0.8]);

    return (
        <div
            ref={ref}
            key={feature.title}
            className="sm:grid sm:grid-cols-2 gap-20 items-center sm:py-40 flex flex-col p-4">
            <motion.div
                style={{
                    filter: useMotionTemplate`blur(${blur}px)`,
                    scale:scale,
                }}
                className="flex flex-col gap-5"
            >
                {feature.icon}
                <h1 className="text-4xl font-bold text-white">{feature.title}</h1>
                <p className="text-lg text-neutral-400">{feature.description}</p>
            </motion.div>
            <motion.div
                style={{
                    y:translateContent,
                    opacity:opactiyContent,
                }}
            >
                {feature.content}
            </motion.div>
        </div>
    );
}

export default Scroll