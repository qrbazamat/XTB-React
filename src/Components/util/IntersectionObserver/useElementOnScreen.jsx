import {  } from "react";
import { useEffect, useRef, useState } from "react";

// * INTERSECTION OBSERVER LOGIC
const useElementOnScreen = ( options = {root: null, rootMargin: "0px", threshold: 0.2} ) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }; 

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [containerRef, options]);
    
    return [containerRef, isVisible];
};

export default useElementOnScreen