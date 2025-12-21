import { motion } from "framer-motion";

function Home() {
  const links = [
    { href: "/subscribe", label: "Subscribe Button" },
    { href: "/card", label: "Cards Component" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-900">
      <h1 className="text-4xl text-green-400 mt-8">
        Welcome to the Home Page
      </h1>

      <div
        className="font-mono grid grid-cols-3 gap-10 m-6 text-white text-2xl"
      >
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-green-400 bg-green-500/30 hover:text-green-300 p-4 rounded-lg text-center"
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Home;
