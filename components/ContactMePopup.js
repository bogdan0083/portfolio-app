import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { UIContext } from "../contexts/UIContext";
import ContactForm from "./ContactForm";

export default function ContactMePopup() {
    const lineClass = "block absolute h-0.5 w-5 sm:w-10 bg-current transform transition duration-500 ease-in-out";
    const [popupAnimatedIn, setPopupAnimatedIn] = useState(false);
    const [popupAnimatedOut, setPopupAnimatedOut] = useState(false);
    const [_, setUI] = useContext(UIContext);

    const closePopup = e => {
        e.preventDefault();
        console.log('clicked!');
        setPopupAnimatedIn(false);
        setPopupAnimatedOut(true);

        setTimeout(() => {
            setUI(prev => ({ ...prev, contactPopupVisible: false }))
        }, 500);
    }

    // Animate popup in the beginning
    useEffect(() => {
        setPopupAnimatedIn(true);
    }, []);

    const overlayClass = classNames({
        'z-10 bg-black absolute w-full duration-300 h-full top-0 left-0 transition-opacity': true,
        'opacity-0': !popupAnimatedIn,
        'opacity-60': popupAnimatedIn,
        'opacity-0 delay-200': popupAnimatedOut,
    });

    const contentClass = classNames({
        "duration-300 shadow bg-white px-4 pt-9 pb-7 md:p-10 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 lg:pt-12 mx-auto my-auto self-middle align-middle text-center box-border relative transition-all z-10": true,
        "opacity-0 scale-95": !popupAnimatedIn,
        "scale-100 opacity-100 delay-200": popupAnimatedIn,
        "scale-90 opacity-0 delay-0": popupAnimatedOut,
    });

    return (
        <div className="fixed w-full h-full text-black z-50 top-0 left-0">
            <div className="min-h-full min-w-full absolute top-0 left-0">
                <div className={overlayClass} onClick={closePopup}></div>
                <div className="container mx-auto flex min-h-screen relative">
                    <div className={contentClass}>
                        <button className="text-gray-500 w-10 h-10 sm:w-20 sm:h-20 focus:outline-none bg-white absolute top-1 left-auto right-1 sm:top-0 sm:right-0 transition-opacity hover:opacity-50" onClick={closePopup}>
                            <span className="sr-only">Open main menu</span>
                            <div className="block w-5 sm:w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span aria-hidden="true" className={classNames({ [lineClass]: true, 'rotate-45 translate-y-0': true })}></span>
                                <span aria-hidden="true" className={classNames({ [lineClass]: true, '-rotate-45': true })}></span>
                            </div>
                        </button>
                        <h2 className="font-bold text-2xl w-80 mx-auto sm:w-full sm:text-4xl md:text-5xl sm:leading-tight md:leading-tight md:w-3/4 lg:w-full text-gray-900 mb-2 sm:mb-2 md:mb-4">Enjoy my work?</h2>
                        <p className="text-1xl mx-auto sm:text-2xl sm:w-8/12 mb-5 sm:mb-10">Send me a message. Let's chat!</p>
                        <ContactForm formName="contact-popup" />
                    </div>
                </div>
            </div>
        </div>
    );
}