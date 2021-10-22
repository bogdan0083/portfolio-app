import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactMePopup from '../ContactMePopup';
import { useContext, useEffect } from 'react';
import { UIContext } from '../../contexts/UIContext';

const containerDefaultClass = "flex flex-col items-center justify-center min-h-screen";

export default function DefaultLayout({ children, head, header, footer, pageTitle = null, defaultClass, containerStyle }) {
    const title = pageTitle || 'Bogdan Dolin | Web Developer';
    const [UI] = useContext(UIContext);

    useEffect(() => {
        document.body.className = UI.contactPopupVisible ? 'overflow-hidden' : 'auto';
    }, [UI.contactPopupVisible]);

    const defaultHead = head || (
        <Head>
            <title>{title}</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );

    const defaultHeader = header || <Header />;
    const defaultFooter = footer || <Footer />;
    const containerClass = defaultClass || containerDefaultClass;

    return (

        <div className={containerClass} style={containerStyle}>
            {defaultHead}
            {defaultHeader}
            {children}
            {defaultFooter}
            {UI.contactPopupVisible && <ContactMePopup />}
        </div>

    )
}