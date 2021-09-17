import { useEffect, useRef } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideClickDetection = (ref: any, callBack: () => void, enabled: boolean) => {
    const listenerRef = useRef<boolean>()

    useEffect(() => {
        /**
         * Call callback fn if clicked on outside of targeted element ref
         */
        const handleClickOutside = (event) => {
            if (enabled && ref.current && !ref.current.contains(event.target)) {
                callBack()
            }
        }
        if(!listenerRef.current && enabled){
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            listenerRef.current = true
        }
        
        
        // Unbind the event listener on clean up
        const unbind = () => {
            if(listenerRef.current){
                document.removeEventListener("mousedown", handleClickOutside);
                listenerRef.current = false
            }
        }

        if (!enabled) {
            unbind()
        }
        return () => {
            unbind()
        };
    }, [ref, callBack, enabled]);
}

export default useOutsideClickDetection