import { createContext } from "react";

const MenuContext = createContext({
  isMenuOpen: false,
  toggleMenu: () => {},
});

export default MenuContext;