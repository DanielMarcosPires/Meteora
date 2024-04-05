import React, { useEffect, useState } from "react";

export const  useWindow = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    console.log(width)
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
    useEffect(() => {
      // component is mounted and window is available
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      // unsubscribe from the event on component unmount
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    console.log(width)
    return [window, height]
  
}
