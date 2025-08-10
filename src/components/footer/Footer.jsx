import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import credit from "../../assets/website/credit-cards.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <>
      <div className="bg-[#f19509] p-6 md:p-8 text-white flex flex-col md:flex-row justify-between gap-10">
        {/* First Column */}
        <motion.div
          className="flex-1 flex flex-col gap-4 items-start md:items-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h2 className="text-2xl md:text-3xl font-bold uppercase">Coders Cafe</h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            dicta, asperiores doloremque quis recusandae dolorem aliquam
            provident commodi.
          </p>
          <div className="text-base md:text-xl flex items-center gap-2 mt-2">
            <FaPhone />
            <span>+91 (1234567890)</span>
          </div>
          <div className="text-base md:text-xl flex items-center gap-2">
            <MdLocationOn />
            <span>Gujarat</span>
          </div>
        </motion.div>

        {/* Second Column */}
        <motion.div
          className="flex-1 flex flex-col gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-2xl md:text-3xl font-bold">Quick Links</h2>
          <div className="grid grid-cols-2 gap-6 text-sm md:text-lg">
            <ul className="flex flex-col space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="flex flex-col space-y-2">
              <li>FAQ</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </motion.div>

        {/* Third Column */}
        <motion.div
          className="flex-1 flex flex-col gap-4 items-start md:items-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <h2 className="text-2xl md:text-3xl font-bold">Follow Us</h2>
          <div className="flex flex-wrap gap-4">
            {[FaFacebook, FaInstagram, FaTelegram, FaGoogle].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 md:w-12 md:h-12 border border-white rounded-full text-white text-xl md:text-2xl flex items-center justify-center"
              >
                <Icon />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-semibold">Payment Methods</h1>
            <img src={credit} alt="credit-cards" className="mt-2 w-full max-w-[200px] h-auto" />
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#333] text-white text-center p-4 text-sm md:text-base">
        Made with ❤️ by <span className="font-bold">Parth Purohit</span>
      </div>
    </>
  );
};

export default Footer;
