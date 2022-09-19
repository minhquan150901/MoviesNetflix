import { useEffect, useState } from "react"

export const useViewport = () => {
    const [windowWidth, setWinDowWidth] = useState( window.innerWidth || document.documentElement.clientWidth);

    useEffect(() => {
        const handleWindowWidth = () => {
            const width = window.innerWidth || document.documentElement.clientWidth
            setWinDowWidth(width);
            }
            handleWindowWidth();

            window.addEventListener('resize', handleWindowWidth);
            
            return () => {
                window.removeEventListener('resize', handleWindowWidth);
            }
    },[])
    return [windowWidth];
}