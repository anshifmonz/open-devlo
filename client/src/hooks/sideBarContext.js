import React, { createContext, useState, useContext } from 'react';

const SideBarContext = createContext();
function SideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

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