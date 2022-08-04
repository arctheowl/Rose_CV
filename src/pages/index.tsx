
import CVData from "../../data/data.json"
import { createContext, useState, useEffect } from "react";
import Home from "../components/Home";


export const DataContext = createContext(CVData);
export const ScreenContext = createContext(false);

export default function FinalIndex() {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const handleResize = () => {
    if (window.innerWidth > 720) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <ScreenContext.Provider value={isMobile}>
      <DataContext.Provider value={CVData}>
        <Home />
      </DataContext.Provider>
    </ScreenContext.Provider>
  );
}