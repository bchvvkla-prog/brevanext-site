import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Services": Services,
    "Solutions": Solutions,
    "Industries": Industries,
    "About": About,
    "Contact": Contact,
    "TermsOfService": TermsOfService,
    "PrivacyPolicy": PrivacyPolicy,
    "CookiePolicy": CookiePolicy,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
