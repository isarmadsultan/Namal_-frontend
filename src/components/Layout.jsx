import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import VoiceAssistantWithBackend from './VoiceAssistantWithBackend';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHomepage = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className={`flex-grow ${isHomepage ? '' : 'pt-[164px] pb-12'}`}>
                {children}
            </div>
            <VoiceAssistantWithBackend />
            <Footer />
        </div>
    );
};

export default Layout;
