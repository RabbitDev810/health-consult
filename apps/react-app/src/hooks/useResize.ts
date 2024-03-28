import { useEffect, useState } from "react";

const useResize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", () => {
      handleWindowResize();
    });

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return width;
};

export default useResize;
