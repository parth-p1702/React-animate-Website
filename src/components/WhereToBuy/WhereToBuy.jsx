import { motion } from "framer-motion";
import WorldMap from "../../assets/world_map.png";
const WhereToBuy = () => {
  return (
    <div className="container my-36 ml-4 md:mx-15 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center ">
        {/* form section */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
            className="text-4xl font-bold text-[#1a1f25] font-serif "
          >
            Buy our proucts from anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 border-[1px] border-gray-400 w-full lg:w-[215px] "
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border-[1px] border-gray-400 w-full lg:w-[260px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="country"
              className="px-6 py-2 border-[1px] border-gray-400 w-full "
            />
            <input
              type="zipcode"
              placeholder="zipcode"
              className="px-2 py-2 border-[1px] border-gray-400 w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className="w-full bg-[#f19509] text-white px-4 py-2 rounded-md hover:bg-[#e86f00] duration-200"
          >
            Order Now
          </motion.button>
        </div>
        {/* World map section */}
        <div className="col-span-2">
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:1,
            }} src={WorldMap} alt="" className="w-full sm:w-[500px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
