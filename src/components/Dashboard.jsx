"use client";
import { motion } from 'framer-motion';

const Dashboard = ({ percentage }) => {
  const safePercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="relative flex items-center justify-center">
      <svg className="h-36 w-36 -rotate-90 transform xl:h-48 xl:w-48">
        {/* Background track */}
        <circle
          className="text-betel-red/20"
          cx="50%"
          cy="50%"
          r="42%"
          stroke="currentColor"
          strokeWidth="22"
          fill="transparent"
        />

        {/* Progress ring */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="42%"
          stroke="#9D192E"
          strokeWidth="22"
          fill="transparent"
          pathLength="100"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: safePercentage / 100 }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
            delay: 0.8,
          }}
        />
      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.5,
        }}
        className="absolute flex flex-col items-center justify-center"
      >
        <span className="text-xl font-bold leading-none text-white xl:text-2xl">
          {safePercentage}%
        </span>
      </motion.div>
    </div>
  );
};

export default Dashboard;
