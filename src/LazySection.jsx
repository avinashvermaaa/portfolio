import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-10 h-10 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

function LazySection({ children, height = "200px" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "150px",
  });

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {inView && <Suspense fallback={<Loader />}>{children}</Suspense>}
    </div>
  );
}

export default LazySection;