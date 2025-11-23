import React, { ReactNode, useState } from "react";

interface TooltipProps {
  content: string | ReactNode;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = "top" }) => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  // Tailwind classes for position
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}
      {visible && (
        <div
          className={`
            absolute 
            ${positionClasses[position]} 
            bg-gray-800 
            text-white 
            text-sm 
            py-1 px-2 
            rounded 
            whitespace-nowrap 
            z-50 
            pointer-events-none
            transition-opacity
            duration-200
            opacity-100
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
