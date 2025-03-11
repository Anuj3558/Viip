import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence,motion } from 'framer-motion';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CompanyRegistrationPage from './Pages/Services/BussinessSetup/CompanyRegistrationPage';
import LLPAnnualCompliancePage from './Pages/Services/BussinessSetup/LLPAnnualCompliancePage';
import LLPDesignatedPartnerChangePage from './Pages/Services/BussinessSetup/LLPDesignatedPartnerChangePage';
import ProducerCompanyRegistrationPage from './Pages/Services/BussinessSetup/ProducerCompanyRegistrationPage';
import StartupIndiaRegistrationPage from './Pages/Services/BussinessSetup/StartupIndiaRegistrationPage';
import OnePersonCompanyRegistrationPage from './Pages/Services/BussinessSetup/OnePersonCompanyRegistrationPage';
import MOUDraftingPage from './Pages/Services/BussinessSetup/MOUDraftingPage';
import LLPAnnualFilingPage from './Pages/Services/BussinessSetup/LLPAnnualFilingPage';
import SoleProprietorshipRegistrationPage from './Pages/Services/BussinessSetup/SoleProprietorshipRegistrationPage';
import NidhiCompanyRegistrationPage from './Pages/Services/BussinessSetup/NidhiCompanyRegistrationPage';
import PartnershipDeedDraftingPage from './Pages/Services/BussinessSetup/PartnershipDeedDraftingPage';
import AuthorizedShareCapitalPage from './Pages/Services/BussinessSetup/AuthorizedShareCapitalPage';
import CompanyNameChangePage from './Pages/Services/BussinessSetup/CompanyNameChangePage';

// import About from './pages/About';
// import Services from './pages/Services';
// import Blogs from './pages/Blogs';
// import Contact from './pages/Contact';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.02 },
  };

  const pageTransition = { type: "tween", ease: "anticipate", duration: 0.5 };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageTransition><Home /></PageTransition>} />
      <Route path="/company-registrion" element={<PageTransition><CompanyRegistrationPage /></PageTransition>} />
      <Route path="/llpannual-compliance" element={<PageTransition><LLPAnnualCompliancePage /></PageTransition>} />
      <Route path="/llpdesignated-partner-change" element={<PageTransition><LLPDesignatedPartnerChangePage /></PageTransition>} />
      <Route path="/producer-company-registration" element={<PageTransition><ProducerCompanyRegistrationPage /></PageTransition>} />
      <Route path="/startup-india-registration" element={<PageTransition><StartupIndiaRegistrationPage /></PageTransition>} />
      <Route path="/one-person-company-registration" element={<PageTransition><OnePersonCompanyRegistrationPage /></PageTransition>} />
      <Route path="/mou-drafting" element={<PageTransition><MOUDraftingPage /></PageTransition>} />
      <Route path="/llp-annual-filing" element={<PageTransition><LLPAnnualFilingPage /></PageTransition>} />
      <Route path="/sole-proprietorship-registration" element={<PageTransition><SoleProprietorshipRegistrationPage /></PageTransition>} />
      <Route path="/nidhi-company-registration" element={<PageTransition><NidhiCompanyRegistrationPage /></PageTransition>} />
      <Route path="/partnership-deed-drafting" element={<PageTransition><PartnershipDeedDraftingPage /></PageTransition>} />
      <Route path="/authorized-share-capital" element={<PageTransition><AuthorizedShareCapitalPage /></PageTransition>} />
      <Route path="/company-name-change" element={<PageTransition><CompanyNameChangePage /></PageTransition>} />
        {/* <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} /> */}
        <Route
          path="/dashboard"
          element={
            <PageTransition>
              <Dashboard />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
