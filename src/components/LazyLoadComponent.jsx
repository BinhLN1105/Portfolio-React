import { useRef } from "react";
import { useInView } from "motion/react";

const LazyLoadComponent = ({ children, className, ...props }) => {
  const ref = useRef(null);
  // margin: "200px" loads the component 200px before it enters the viewport
  // once: false ensures it unmounts when leaving the viewport (saving resources)
  const isInView = useInView(ref, { once: false, margin: "200px" });

  return (
    <div ref={ref} className={className} {...props}>
      {isInView ? children : <div className="h-full w-full min-h-[100px]" />}
    </div>
  );
};

export default LazyLoadComponent;
