import { useContext } from "react";
import { UIContext } from "../contexts/UIContext";
import MainNav from "./MainNav";
import SocialIcons from "./SocialIcons";

export default function MobileMenu({ isOpen = false }) {
    const [_, setUI] = useContext(UIContext);

    const openPopup = e => {
        e.preventDefault();
        setUI(prev => ({ ...prev, contactPopupVisible: true }));
    }

    return (
        <div className="fixed w-full h-full pb-4 sm:hidden bg-white top-0 left-0 text-center flex flex-col items-center justify-center text-indigo-700">
            <MainNav isMobile={true} />
            <SocialIcons isMobile={true} />
            <button onClick={openPopup} className="inline-block items-center mt-1 p-3 align-center self-center ml-1 sm:ml-3 text-space-default hover:bg-white hover:text-space-default transition-all font-semibold sm:flex">Contact Me</button>
        </div>
    )
}