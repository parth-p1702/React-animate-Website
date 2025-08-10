import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({sidebar,setSidebar}) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 pl-20 text-white z-40">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-[#f19509]">Coders</span> coffee
          </motion.h1>
          {/* Hamburger menu section */}
          <motion.div
          initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            onClick={()=>setSidebar(!sidebar)}
            >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
