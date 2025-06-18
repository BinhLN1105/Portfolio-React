// File: AuroraBackground.jsx

"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    // Change <main> to a simple <div> to remove potential default browser styling
    <div
      className={twMerge(
        "relative flex h-full w-full items-center justify-center overflow-hidden", // Ensure it's relative for absolute children
        "bg-gray-800 dark:bg-zinc-900", // Background color of the container
        className // Pass through any additional classes from parent
      )}
      {...props}
    >
      {/* This div is the actual aurora effect, which will be absolutely positioned
        to cover the entire parent div (which has h-full w-full).
        It should be rendered *before* the children's container visually,
        but since it's `absolute`, its order in the DOM doesn't strictly matter for visual stacking
        if z-indexes are correctly applied. However, placing it first is a common pattern for backgrounds.
      */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          "--aurora":
            "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
          "--dark-gradient":
            "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
          "--white-gradient":
            "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
          "--blue-300": "#93c5fd",
          "--blue-400": "#60a5fa",
          "--blue-500": "#3b82f6",
          "--indigo-300": "#a5b4fc",
          "--violet-200": "#ddd6fe",
          "--black": "#000",
          "--white": "#fff",
          "--transparent": "transparent",
        }}
      >
        <div
          className={twMerge(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-80 blur-[5px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>

      {/* This div wraps the children and makes sure they are visible on top.
        It needs `relative` and a higher `z-index` if the background is `absolute`.
        Also, ensure it occupies the full space to allow for proper centering of children.
      */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        {children}
      </div>
    </div> // End of the wrapper div
  );
};
