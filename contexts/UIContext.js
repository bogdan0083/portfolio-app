import { createContext, useState } from "react";

const defaultValue = {
    headerHeight: 0,
    contactPopupVisible: false,
};

export const UIContext = new createContext({
    UI: defaultValue,
    setUI: (UI) => {}
});

export const UIProvider = ({ children }) => {
    const [UI, setUI] = useState(defaultValue);

    return (
        <UIContext.Provider value={[UI, setUI]}>
            {children}
        </UIContext.Provider>
    );
}