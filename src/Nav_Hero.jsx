import { motion } from "framer-motion";
const Nav_Hero = () => {
  const navVariates = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const heroVariates = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Navbar */}
      <motion.nav
        variants={navVariates}
        initial="hidden"
        animate="visible"
        style={{
          background: "#8b5cf6",
          padding: "1rem 2rem",
          margin:"2px 1px 1px 1px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "0 0 12px 12px",
        }}
      >
        <h1 className="text-[22px]">MotionSite</h1>
        <ul className="flex text-[20px] gap-5 list-none cursor-pointer">
          {["Home", "About", "Contact"].map((item) => (
            <motion.li
              whileHover={{ scale: 1.1, color: "#d8b4fe" }}
              transition={{ type: "spring", stiffness: 300 }}
              key={item}
            >
                {item}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
      {/* Hero Section */}
      <motion.section
      variants={heroVariates}
        initial="hidden"
        animate="visible"
        style={{
          
          padding: "5rem 2rem",
          background: "#ede9fe",
          minHeight:"60vh",
          textAlign:"center",
        }}>
            <h2 className="text-[20px] text-[#6b21a8]">Welcome to Framer Motion World!</h2>
            <p className="text-[16px] text-[#7e22ce] mt-[10px]">Create stunning animations in react with framer motion </p>
      </motion.section>
    </div>
  );
};

export default Nav_Hero;
