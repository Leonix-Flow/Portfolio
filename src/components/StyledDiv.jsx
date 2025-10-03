// StyledDiv.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";

const StyledDiv = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      className={`rounded-lg shadow-md backdrop-blur-md bg-white/30 dark:bg-gray-600/30 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

StyledDiv.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default StyledDiv;
