import { createContext, useState, useContext } from 'react';

const NavBarContext = createContext();
function NavBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavBarContext.Provider>
  );
}

const useNavBar = () => useContext(NavBarContext)

export {NavBarProvider, useNavBar}