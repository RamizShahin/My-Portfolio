import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4 w-screen">
      <motion.h1
        className="text-8xl font-extrabold text-blue-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl text-gray-700 mt-4 mb-6 text-center max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Oops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
