import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Roadmap", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-4 sm:px-8 lg:px-16 py-4 relative z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="./logo.png" alt="logo" className="h-14 sm:h-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-grow">
          {navLinks.map((navLink, index) => (
            <motion.a 
              key={index} 
              href={navLink.href} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                mx-2 xl:mx-4 text-sm xl:text-base text-white font-bold 
                ${navLink.name === "Home" ? "text-secondary" : ""}
                hover:text-[#FFD700] 
                transition-colors
              `}
            >
              {navLink.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block text-sm xl:text-base bg-gradient-to-r from-[#E4B40D] to-[#FBD966] text-[#0B1221] px-4 xl:px-6 py-2 rounded-full font-semibold hover:opacity-80 transition-opacity"
          >
            Connect Wallet
          </motion.button>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <motion.button 
              onClick={toggleMenu} 
              whileTap={{ scale: 0.9 }}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} onClick={toggleMenu} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 bg-[#0B1221] bg-opacity-95 
              lg:hidden z-40 
              flex flex-col items-center 
              justify-center 
              space-y-6 sm:space-y-8
              pt-16
            "
          >
            <motion.button 
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white p-2"
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((navLink, index) => (
                <motion.a
                  key={index}
                  href={navLink.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 20,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    text-2xl text-white 
                    font-bold 
                    hover:text-[#FFD700] 
                    transition-colors 
                    transform hover:scale-110
                  "
                  onClick={toggleMenu}
                >
                  {navLink.name}
                </motion.a>
              ))}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="
                  bg-gradient-to-r from-[#E4B40D] to-[#FBD966] 
                  text-[#0B1221] px-10 py-4 
                  rounded-full font-semibold 
                  hover:opacity-80 
                  transition-opacity 
                  text-xl
                "
                onClick={toggleMenu}
              >
                Connect Wallet
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;