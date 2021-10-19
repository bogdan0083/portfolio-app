import { useContext, useEffect, useRef, useState } from "react";
import { UIContext } from "../contexts/UIContext";
import BackButton from "./BackButton";
import BurgerTrigger from "./BurgerTrigger";
import Logo from "./Logo";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";
import SocialIcons from "./SocialIcons";

export default function Header({ hasBackButton = false, hideMenu = false, hideLogo = false, children }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [_, setUI] = useContext(UIContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(p => !p);
  }

  useEffect(() => {
    setUI(prev => ({ ...prev, headerHeight: headerRef.current.offsetHeight }));
  }, []);

  const openPopup = e => {
    e.preventDefault();
    setUI(prev => ({ ...prev, contactPopupVisible: true }));
  }

  return (
    <header className="text-white p-3 fixed top-0 left-0 w-full z-20 bg-space-default shadow" ref={headerRef}>
      <div className="container flex mx-auto items-center">
        {hasBackButton && <BackButton />}
        {!hideLogo && <Logo />}
        {!hideMenu && <MainNav />}
        {children}
        <SocialIcons />
        <BurgerTrigger active={isMobileMenuOpen} onClick={toggleMobileMenu} />
        <button onClick={openPopup} className="border-2 items-center px-3 py-2 self-center ml-1 sm:ml-3 hover:bg-white hover:text-space-default transition-all font-semibold hidden sm:flex">Contact Me</button>
      </div>
      {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} />}
    </header>
  )
}
