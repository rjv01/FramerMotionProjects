import { Link } from "lucide-react";
import { useState,useRef,useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const useOutSideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};


function CardLayout() {
    type Card = {
        description: string;
        title:string,
        bgcolor:string,
        src:string,
        ctaText:string,
        ctaLink:string,
        context:()=>React.ReactNode
    }
    const cards:Card[] =[
        {
            description:"This is card 1",
            title:"Card 1",
            src:"/alia.webp",
            bgcolor:"bg-red-400",
            ctaText:"Play",
            ctaLink:"/card1",
            context:()=> (
                <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
                </>
            )
        },
        {
            description:"This is card 2",
            title:"Card 2",
            src:"/kiara.webp",
            bgcolor:"red",
            ctaText:"Play",
            ctaLink:"/card2",
            context:()=> (
                <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
                </>
            )
        },
        {
            description:"This is card 3",
            title:"Card 3",
            src:"/kiara.webp",
            bgcolor:"red",
            ctaText:"Play",
            ctaLink:"/card3",
            context:()=> (
                <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
                </>
            )
        },
        {
            description:"This is card 4",
            title:"Card 4",
            src:"/kiara.webp",
            bgcolor:"red",
            ctaText:"Play",
            ctaLink:"/card4",
            context:()=> (
                <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
                </>
            )
        },
        {
            description:"This is card 5",
            title:"Card 5",
            src:"/kiara.webp",
            bgcolor:"red",
            ctaText:"Play",
            ctaLink:"/card5",
            context:()=> (
                <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
                </>
            )
        },
    ];

    const [current,setCurrent] = useState<Card | null>(null);
    const closeCard = useCallback(() => setCurrent(null), []);
    const ref = useOutSideClick(closeCard);


    return (
        <div className="min-h-screen bg-gray-100 py-10 relative">
            {
                current && <motion.div
                                initial={{
                                    opacity:0
                                }}
                                animate={{
                                    opacity:1
                                }}
                                className="fixed z-10 h-full w-full inset-0 bg-red-500/50 backdrop-blur-sm"
                            ></motion.div>
            }
            {
                current && (
                    <motion.div
                        layoutId={`card-${current.title}`}
                        ref={ref}
                        className={`h-120 w-60 sm:h-150 sm:w-82 fixed inset-0 z-20 m-auto ${current.bgcolor ?? "bg-gray-200"} rounded-2xl border border-neutral-200 p-4`}>
                        <motion.img
                            layoutId={`card-image-${current.title}`}
                            src={current.src} 
                            alt={current.title}
                            className="w-full aspect-square rounded-2xl"
                        />
                        <div className="flex flex-col justify-between items-start">
                            <div className="flex item-start justify-between py-4 w-full gap-2">
                                <div className="flex flex-col item-start gap-2">
                                    <motion.h2
                                        layoutId={`card-tite-${current.title}`}
                                        className="font-bold text-xs tracking-tight text-black"
                                    >{current.title}</motion.h2>
                                    <motion.p
                                        layoutId={`card-description-${current.title}`}
                                        className="text-[10px] text-neutral-500"
                                    >{current.description}</motion.p>
                                </div>
                                <motion.div
                                    layoutId={`card-cta${current.title}`}
                                >
                                    <Link 
                                        href={current.ctaLink}
                                        className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
                                    >
                                        {current.ctaText}
                                    </Link>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{
                                    filter:"blur(10px)",
                                    opacity:0
                                }}
                                animate={{
                                    filter:"blur(0px)",
                                    opacity:1
                                }}
                                transition={{
                                    delay:0.3
                                }}
                            >
                                <p className="h-40 overflow-auto">{current.context()}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )
            }
            <div className="flex flex-col sm:w-110 max-w-2xl mx-auto gap-6 px-4">
                {
                    cards.map((card,index)=>(
                        <motion.button
                            layoutId={`card-${card.title}`}
                            key={index}
                            onClick={()=>setCurrent(card)}
                            className="flex justify-between cursor-pointer items-center bg-white p-4 rounded-lg border border-neutral-200 m-4"
                        >
                        <div className="flex gap-4 items-center">
                            <motion.img
                                layoutId={`card-image-${card.title}`}
                                src={card.src} 
                                alt={card.title}
                                className="h-14 aspect-square rounded-lg"
                            />
                            <div className="flex flex-col items-start gap-2">
                                <motion.h2
                                    layoutId={`card-title-${card.title}`}
                                    className="font-bold text-lg tracking-tight text-black"
                                >{card.title}</motion.h2>
                                <motion.p
                                    layoutId={`card-description-${card.title}`}
                                    className="text-xs text-neutral-500"
                                >{card.description}</motion.p>
                            </div>
                        </div>
                        <motion.div
                            layoutId={`card-cta-${card.title}`}
                            className="flex items-center px-2 py-1 bg-green-500 rounded-full text-white text-xs">
                            {card.ctaText}
                        </motion.div>
                        </motion.button>
                    ))
                }
            </div>
        </div>
    );
}

export default CardLayout
