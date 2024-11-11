import { createContext, useState, useContext, useEffect } from 'react';

const SideBarContext = createContext();
function SideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 832);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 832 && isOpen) {
        setIsOpen(false);
      } else if (window.innerWidth >= 832 && !isOpen) {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  function toggleSideBar() {
    setIsOpen(!isOpen);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, toggleSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
}

const useSideBar = () => useContext(SideBarContext)

export {SideBarProvider, useSideBar}