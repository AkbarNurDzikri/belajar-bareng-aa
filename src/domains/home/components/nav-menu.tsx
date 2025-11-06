import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface Props {
  showMenu: boolean;
}

export const NavMenu = ({ showMenu }: Props) => {
  const menuItems = [
    { name: "Home", to: "hero" },
    { name: "Kelompok Belajar", to: "study-group" },
    { name: "Galeri", to: "gallery" },
    { name: "FAQ", to: "faq" },
    { name: "Kontak", to: "contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: showMenu ? 1 : 0,
        y: showMenu ? 0 : -10,
      }}
      transition={{ duration: 0.3 }}
      className={`absolute top-16 md:top-20 left-0 w-full bg-gradient-to-br from-blue-300 to-violet-500 shadow-md rounded-b-xl overflow-hidden z-10 ${
        showMenu ? "max-h-96" : "max-h-0"
      }`}
    >
      <ul className="flex flex-col items-center gap-3 p-5 text-white font-medium">
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80} // biar gak ketutup header
              className="cursor-pointer hover:text-violet-800 transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
