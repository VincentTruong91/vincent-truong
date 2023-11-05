/*
* This will determine if the user's display matches a particular breakpoint of a media screen size.
* The useMediaQuery will tell us if the current screen size is above or below the breakpoint.
* This is a hook.
*/

//These 2 functions are from the react library
import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        //The effect compares the media.matches value with the matches state
        if (media.matches !== matches){
            //If it's different, this updates the state to reflect the new match status
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]); 
    //dependcy array - when either matches or query values change, the effect is triggered

    return matches;
}

export default useMediaQuery;