import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function HorizontalScrollCarousel() {
  return (
    <div className=" bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
            Scroll down
        </span>
      </div>
      <Horizontalscroll />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
            Scroll up
        </span>
      </div>
    </div>
  );
};

const Horizontalscroll = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target:targetRef,
        offset:["start start","end start"]
    });
    const x = useTransform( scrollYProgress,[0,1],["1%","-85%"]);
    return (
        <section
            ref={targetRef}
            className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {
                        cards.map((card)=>{
                            return <Card card={card} key={card.id} />;
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="group relative h-115 w-115 shrink-0 overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 grid place-content-center">
        <p className="bg-linear-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};


export default HorizontalScrollCarousel;

type CardType={
    url:string,
    title:string,
    id:number
}

const cards:CardType[] = [
    {
        url:"/tamanna.webp",
        title:"Title 1",
        id:1
    },
    {
        url:"/tamanna.webp",
        title:"Title 2",
        id:2
    },
    {
        url:"/tamanna.webp",
        title:"Title 3",
        id:3
    },
    {
        url:"/tamanna.webp",
        title:"Title 4",
        id:4
    },
    {
        url:"/tamanna.webp",
        title:"Title 5",
        id:5
    },
    {
        url:"/tamanna.webp",
        title:"Title 6",
        id:6
    },
    {
        url:"/tamanna.webp",
        title:"Title 7",
        id:7
    },
]
