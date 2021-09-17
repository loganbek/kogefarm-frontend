import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (ref: any, callBack: () => void, enabled: boolean) => {
    useEffect(() => {
        /**
         * Call callback fn if clicked on outside of targeted element ref
         */
        const handleClickOutside = (event) => {
            if (enabled && ref.current && !ref.current.contains(event.target)) {
                callBack()
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Unbind the event listener on clean up
        const unbind = () => document.removeEventListener("mousedown", handleClickOutside);

        if (!enabled) {
            unbind()
        }
        return () => {
            unbind()
        };
    }, [ref, callBack, enabled]);
}

export default useOutsideAlerter