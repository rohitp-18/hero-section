import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="position-relative d-flex justify-content-center align-items-center vh-100 bg-dark">
      <svg viewBox="0 0 400 100" className="position-absolute w-100 h-100">
        <defs>
          <mask id="text-mask">
            <motion.text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="50"
              fontWeight="bold"
              fill={"none"}
              stroke="#dedede"
              strokeOpacity={0.6}
              strokeWidth=".8"
              strokeLinejoin="round"
              initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2 }}
            >
              PHA5E
            </motion.text>
            <motion.text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="50"
              fontWeight="bold"
              stroke="#dedede"
              strokeWidth=".8"
              strokeLinejoin="round"
              initial={{ height: 0, fill: "white" }}
              animate={{ height: "100%" }}
              transition={{
                delay: 3,
                duration: 2,
                ease: "easeInOut",
                fill: { delay: 5, duration: 0.5 },
              }}
            >
              PHA5E
            </motion.text>
          </mask>
        </defs>
        <motion.text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="50"
          fontWeight="bold"
          fill={"none"}
          stroke="#dedede"
          strokeWidth=".8"
          strokeLinejoin="round"
          initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
          animate={{ strokeDashoffset: 0 }}
          className={`bg-stroke`}
          transition={{ duration: 2 }}
        >
          PHA5E
        </motion.text>
        <rect
          x={0}
          className="bg-stroke"
          fill="#dedede"
          width="100%"
          mask="url(#text-mask)"
        />
      </svg>
      <div
        style={{ paddingTop: "6rem", textDecoration: "italic" }}
        className="text-center mt-5 text-white loading-text"
      >
        loading...
      </div>
    </div>
  );
};

export default Loader;
