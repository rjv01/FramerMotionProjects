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
    // const cards:Card[] =[
    //     {
    //         description:"This is card 1",
    //         title:"Card 1",
    //         src:"/alia.webp",
    //         bgcolor:"bg-red-400/50",
    //         ctaText:"Play",
    //         ctaLink:"/card1",
    //         context:()=> (
    //             <>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
    //             </>
    //         )
    //     },
    //     {
    //         description:"This is card 2",
    //         title:"Card 2",
    //         src:"/kiara.webp",
    //         bgcolor:"bg-blue-400/50",
    //         ctaText:"Play",
    //         ctaLink:"/card2",
    //         context:()=> (
    //             <>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
    //             </>
    //         )
    //     },
    //     {
    //         description:"This is card 3",
    //         title:"Card 3",
    //         src:"/tripti.jpeg",
    //         bgcolor:"bg-purple-400/50",
    //         ctaText:"Play",
    //         ctaLink:"/card3",
    //         context:()=> (
    //             <>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
    //             </>
    //         )
    //     },
    //     {
    //         description:"This is card 4",
    //         title:"Card 4",
    //         src:"/emilia.png",
    //         bgcolor:"bg-yellow-400/50",
    //         ctaText:"Play",
    //         ctaLink:"/card4",
    //         context:()=> (
    //             <>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
    //             </>
    //         )
    //     },
    //     {
    //         description:"This is card 5",
    //         title:"Card 5",
    //         src:"/tamanna.webp",
    //         bgcolor:"bg-green-400/50",
    //         ctaText:"Play",
    //         ctaLink:"/card5",
    //         context:()=> (
    //             <>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum qui cupiditate est sapiente voluptatum, saepe earum incidunt quod tempore provident sed commodi soluta eum dolor! Earum cum ea numquam.
    //             </>
    //         )
    //     },
    // ];
    const cards: Card[] = [
        {
            title: "Alia Bhatt",
            description: "Award-winning Indian actress known for versatile roles.",
            src: "/alia.webp",
            bgcolor: "bg-red-400/50",
            ctaText: "Play",
            ctaLink: "/card1",
            context: () => (
            <>
                is one of the most successful actresses
                of modern Indian cinema. She is known for her performances in both
                commercial blockbusters and critically acclaimed films, showcasing
                exceptional emotional range and screen presence.
            </>
            ),
        },

        {
            title: "Kiara Advani",
            description: "Popular Bollywood actress with strong screen appeal.",
            src: "/kiara.webp",
            bgcolor: "bg-blue-400/50",
            ctaText: "Play",
            ctaLink: "/card2",
            context: () => (
            <>
                rose to fame with her charming
                performances and relatable characters. She is admired for her elegance,
                expressive acting, and consistent presence in successful mainstream films.
            </>
            ),
        },

        {
            title: "Tripti Dimri",
            description: "Critically acclaimed actress known for intense roles.",
            src: "/tripti1.webp",
            bgcolor: "bg-purple-400/50",
            ctaText: "Play",
            ctaLink: "/card3",
            context: () => (
            <>
                is celebrated for her powerful
                performances in content-driven cinema. She is known for choosing strong,
                unconventional roles that leave a lasting impact on audiences.
            </>
            ),
        },

        {
            title: "Emilia Clarke",
            description: "International actress famous for iconic TV roles.",
            src: "/emilia.png",
            bgcolor: "bg-yellow-400/50",
            ctaText: "Play",
            ctaLink: "/card4",
            context: () => (
            <>
                gained worldwide recognition
                for her iconic television performances. She is admired for her charisma,
                emotional depth, and ability to portray strong, memorable characters.
            </>
            ),
        },

        {
            title: "Tamannaah Bhatia",
            description: "Pan-Indian actress with a strong South cinema presence.",
            src: "/tamanna.webp",
            bgcolor: "bg-green-400/50",
            ctaText: "Play",
            ctaLink: "/card5",
            context: () => (
            <>
                has established herself across
                multiple film industries in India. She is known for her versatility,
                graceful screen presence, and long-standing career in both commercial
                and performance-oriented cinema.
            </>
            ),
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
                                className={`fixed z-10 h-full w-full inset-0 ${current.bgcolor} backdrop-blur-sm`}
                            ></motion.div>
            }
            {
                current && (
                    <motion.div
                        layoutId={`card-${current.title}`}
                        ref={ref}
                        className="sm:flex flex-col sm:flex-row h-140 w-60 sm:h-150 sm:w-150 fixed inset-0 z-20 m-auto bg-white rounded-2xl border border-neutral-200 py-4 sm:p-4">
                        <motion.img
                            layoutId={`card-image-${current.title}`}
                            src={current.src} 
                            alt={current.title}
                            className="sm:max-w-2xl mx-auto sm:object-contain h-50 w-40 sm:ml-2 ml-10 sm:h-140 sm:w-60 rounded-2xl mr-4"
                        />
                        <div className="flex flex-col justify-between items-start p-2 ">
                            <div className="flex flex-col item-start justify-between py-4 w-full ">
                                <div className="flex justify-between sm:border sm:border-neutral-200 rounded-2xl px-4 sm:p-4 item-start gap-2 ">
                                    <div className="flex flex-col gap-2 ">
                                        <motion.h2
                                            layoutId={`card-tite-${current.title}`}
                                            className="font-bold sm:text-2xl text-md tracking-tight text-black"
                                        >{current.title}</motion.h2>
                                        <motion.p
                                            layoutId={`card-description-${current.title}`}
                                            className="sm:text-md text-xs text-neutral-500 italic"
                                        >{current.description}</motion.p>
                                    </div>
                                    <motion.div
                                        layoutId={`card-cta${current.title}`}
                                    >
                                        <Link 
                                            href={current.ctaLink}
                                            className="px-1.5 py-1 bg-green-500 rounded-full text-white text-xs"
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
                                    className="p-4 sm:mt-6 overflow-auto"
                                >
                                    <p className=" sm:text-xl text-sm font-mono ">{current.context()}</p>
                                </motion.div>
                            </div>
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
                                    className="text-xs text-neutral-500 text-left"
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
