import { Suspense, useState } from "react";
import { useInView } from "react-intersection-observer";

export function LazySection({ component: Component }) {
    const [loaded, setLoaded] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // load only once
        threshold: 0.1,    // trigger when 10% of the section is visible
    });

    // when in view, mark as loaded
    if (inView && !loaded) setLoaded(true);

    return (
        <div ref={ref}>
            {loaded && (
                <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <Component />
                </Suspense>
            )}
        </div>
    );
}