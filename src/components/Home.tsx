import { motion } from "framer-motion";

function Home() {
  const links = [
    { href: "/subscribe", label: "Subscribe Button" },
    { href: "/card", label: "Cards Component" },
    { href: "/sidebar", label: "Sidebar Component" },
    { href: "/counter", label: "Counter Component" },
    { href: "/sidebar", label: "Sidebar Component" },
    { href: "/sidebar", label: "Sidebar Component" },
    { href: "/sidebar", label: "Sidebar Component" },
    { href: "/sidebar", label: "Sidebar Component" },
    { href: "/sidebar", label: "Sidebar Component" },
  ];

  const containerVariants = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.2,
      }
    }
  };

  const itemVariants = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      y:-20
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-900">
      <h1 className="text-4xl text-green-400 m-6 text-center">
        Welcome to the Home Page
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="font-mono grid sm:grid-cols-3 gap-10 m-6 text-white text-2xl"
      >
        {links.map((link, i) => (
          <motion.a
            variants={itemVariants}
            key={i}
            href={link.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-green-400 bg-green-500/30 hover:text-green-300 p-4 rounded-lg text-center"
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Home;
