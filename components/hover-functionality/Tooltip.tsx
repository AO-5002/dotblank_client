import { IChildrenProps } from "../../utils/types/children";
import { motion } from "motion/react";
import { useState } from "react";

/* 
    This is a tooltip that wraps around any component and shows a message when hovered.
*/

function TooltipMessage({ message }: { message: string }) {
  return (
    <div className="absolute top-16 mb-2 w-max max-w-xs bg-secondary-darkest text-primary-darkest text-caption rounded-md p-2 shadow-lg z-10">
      {message}
    </div>
  );
}

function Tooltip({ children, message }: IChildrenProps & { message: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inset-0"
    >
      {children}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <TooltipMessage message={message} />
      </motion.div>
    </div>
  );
}

export { Tooltip };
