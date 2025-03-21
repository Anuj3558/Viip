import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CompanyRegistrationPage from "./Pages/Services/BussinessSetup/CompanyRegistrationPage";
import LLPAnnualCompliancePage from "./Pages/Services/BussinessSetup/LLPAnnualCompliancePage";
import LLPDesignatedPartnerChangePage from "./Pages/Services/BussinessSetup/LLPDesignatedPartnerChangePage";
import ProducerCompanyRegistrationPage from "./Pages/Services/BussinessSetup/ProducerCompanyRegistrationPage";
import StartupIndiaRegistrationPage from "./Pages/Services/BussinessSetup/StartupIndiaRegistrationPage";
import OnePersonCompanyRegistrationPage from "./Pages/Services/BussinessSetup/OnePersonCompanyRegistrationPage";
import MOUDraftingPage from "./Pages/Services/BussinessSetup/MOUDraftingPage";
import LLPAnnualFilingPage from "./Pages/Services/BussinessSetup/LLPAnnualFilingPage";
import SoleProprietorshipRegistrationPage from "./Pages/Services/BussinessSetup/SoleProprietorshipRegistrationPage";
import NidhiCompanyRegistrationPage from "./Pages/Services/BussinessSetup/NidhiCompanyRegistrationPage";
import PartnershipDeedDraftingPage from "./Pages/Services/BussinessSetup/PartnershipDeedDraftingPage";
import AuthorizedShareCapitalPage from "./Pages/Services/BussinessSetup/AuthorizedShareCapitalPage";
import CompanyNameChangePage from "./Pages/Services/BussinessSetup/CompanyNameChangePage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import TrademarkRegistrationPage from "./Pages/Services/Trademark/TrademarkRegistrationPage";
import TrademarkRegistrationIndividualPage from "./Pages/Services/Trademark/TrademarkRegistrationIndividualPage";
import TrademarkAssignmentPage from "./Pages/Services/Trademark/TrademarkAssignmentPage";
import IncomeTaxReturnPage from "./Pages/Services/IncomeTax/IncomeTaxReturnPage";
import PayrollManagementPage from "./Pages/Services/IncomeTax/PayrollManagementPage";
import ISOCertificationPage from "./Pages/Services/Liscence&Accounting/ISO/ISOCertificationPage";
import ISO9001CertificationPage from "./Pages/Services/Liscence&Accounting/ISO/ISO9001CertificationPage";
import ISO9000_2005CertificationPage from "./Pages/Services/Liscence&Accounting/ISO/ISO9000_2005CertificationPage";
import ISO13485CertificationPage from "./Pages/Services/Liscence&Accounting/ISO/ISO13485CertificationPage";
import ISO14001CertificationPage from "./Pages/Services/Liscence&Accounting/ISO/ISO14001CertificationPage";
import ISO22000CertificationPage from "./Pages/Services/Liscence&Accounting/ISO/ISO22000CertificationPage";
import ISO26000ConsultingPage from "./Pages/Services/Liscence&Accounting/ISO/ISO26000ConsultingPage";
import ISO27001CertificationPage from "./Pages/Services/Liscence&Accounting/ISO/ISO27001CertificationPage";
import ISO31000CertificationPage from "./Pages/Services/Liscence&Accounting/ISO/ISO31000CertificationPage";
import BenefitsOfISOCertification from "./Pages/Services/Liscence&Accounting/ISO/BenefitsOfISOCertification";
import UdyogAadharRegistrationPage from "./Pages/Services/Liscence&Accounting/UdyogAadharRegistrationPage";
import TradeLicenseRenewalPage from "./Pages/Services/Liscence&Accounting/TradeLicenseRenewalPage";
import PSARALicensePage from "./Pages/Services/Liscence&Accounting/PSARALicensePage";
import ProfessionalTaxRegistrationPage from "./Pages/Services/Liscence&Accounting/ProfessionalTaxRegistrationPage";
import PFRegistrationPage from "./Pages/Services/Liscence&Accounting/PFRegistrationPage";
import LegalMetrologyRegistrationPage from "./Pages/Services/Liscence&Accounting/LegalMetrologyRegistrationPage";
import FSSAIRegistrationPage from "./Pages/Services/Liscence&Accounting/FSSAIRegistrationPage";
import ESIRegistrationPage from "./Pages/Services/Liscence&Accounting/ESIRegistrationPage";
import DigitalSignatureCertificatePage from "./Pages/Services/Liscence&Accounting/DigitalSignatureCertificatePage";
import NGORegistrationPage from "./Pages/Services/Liscence&Accounting/NGORegistrationPage";
import InternationalBusinessSetupPage from "./Pages/Services/BussinessSetup/InternationalBusinessSetupPage";
import ConsultAndExpertForBusinessPage from "./Pages/Services/BussinessSetup/ConsultAndExpertForBusinessPage";
import ServicesPage from "./Pages/Services/Services";
import AboutUsPage from "./Pages/About/About";
import ContactForm from "./Pages/Home/components/ContactForm";
import IpDueDiligencePage from "./Pages/Services/Trademark/Legalsupport/IpDueDiligencePage";
import IpLitigationSupportPage from "./Pages/Services/Trademark/Legalsupport/IpLitigationSupportPage";
import IpStrategyConsultingPage from "./Pages/Services/Trademark/Legalsupport/IpStrategyConsultingPage";
import InternationalIpProtectionPage from "./Pages/Services/Trademark/Legalsupport/InternationalIpProtectionPage";
import IpPortfolioManagementPage from "./Pages/Services/Trademark/IpServices/IpPortfolioManagementPage";
import IpLicensingPage from "./Pages/Services/Trademark/IpServices/IpLicensingPage";
import IpValuationPage from "./Pages/Services/Trademark/IpServices/IpValuationPage";
import IndustrialDesignRegistrationPage from "./Pages/Services/Trademark/IpServices/IndustrialDesignRegistrationPage";
import CopyrightRegistrationPage from "./Pages/Services/Trademark/IpServices/CopyrightRegistrationPage";
import PatentRegistrationPage from "./Pages/Services/Trademark/IpServices/PatentRegistrationPage";
import LoginPage from "./Pages/Auth/Login";
import ProtectedRoute from "./components/Protected";
import IECImportExportCodePage from "./Pages/Services/BussinessSetup/IECImportExportCodePage";
import SpiceBoardRegistrationPage from "./Pages/Services/BussinessSetup/SpiceBoardRegistrationPage";
import MSMERegistrationPage from "./Pages/Services/BussinessSetup/MSMERegistrationPage";
import APEDARCMCPage from "./Pages/Services/BussinessSetup/APEDARCMCPage";
import FIEORegistrationPage from "./Pages/Services/BussinessSetup/FIEORegistrationPage";
import HallmarkRegistrationPage from "./Pages/Services/BussinessSetup/HallmarkRegistrationPage";
import BISCertificationPage from "./Pages/Services/BussinessSetup/BISCertificationPage";
import LiquorLicensePage from "./Pages/Services/BussinessSetup/LiquorLicensePage";
import CLRARegistrationPage from "./Pages/Services/BussinessSetup/CLRARegistrationPage";
import ADCodeRegistrationPage from "./Pages/Services/BussinessSetup/ADCodeRegistrationPage";
import IRDAIRegistrationPage from "./Pages/Services/BussinessSetup/IRDAIRegistrationPage";
import DrugsAndCosmeticsLicensePage from "./Pages/Services/BussinessSetup/DrugsAndCosmeticsLicensePage";
import CustomerClearancePage from "./Pages/Services/BussinessSetup/CustomerClearancePage";
import WebsiteEcommerceDevelopmentPage from "./Pages/Services/BussinessSetup/WebsiteEcommerceDevelopmentPage";
import FundraisingPage from "./Pages/Others/FundraisingPage";
import PitchDeckPage from "./Pages/Others/PitchDeckPage";

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
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />{" "}
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutUsPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactForm />
            </PageTransition>
          }
        />
        <Route
          path="/company-registrion"
          element={
            <PageTransition>
              <CompanyRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/MSME-registration"
          element={
            <PageTransition>
              <MSMERegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/llpannual-compliance"
          element={
            <PageTransition>
              <LLPAnnualCompliancePage />
            </PageTransition>
          }
        />
        <Route
          path="/llpdesignated-partner-change"
          element={
            <PageTransition>
              <LLPDesignatedPartnerChangePage />
            </PageTransition>
          }
        />
        <Route
          path="/producer-company-registration"
          element={
            <PageTransition>
              <ProducerCompanyRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/startup-india-registration"
          element={
            <PageTransition>
              <StartupIndiaRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/one-person-company-registration"
          element={
            <PageTransition>
              <OnePersonCompanyRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/mou-drafting"
          element={
            <PageTransition>
              <MOUDraftingPage />
            </PageTransition>
          }
        />
        <Route
          path="/llp-annual-filing"
          element={
            <PageTransition>
              <LLPAnnualFilingPage />
            </PageTransition>
          }
        />
        <Route
          path="/sole-proprietorship-registration"
          element={
            <PageTransition>
              <SoleProprietorshipRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/nidhi-company-registration"
          element={
            <PageTransition>
              <NidhiCompanyRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/partnership-deed-drafting"
          element={
            <PageTransition>
              <PartnershipDeedDraftingPage />
            </PageTransition>
          }
        />
        <Route
          path="/authorized-share-capital"
          element={
            <PageTransition>
              <AuthorizedShareCapitalPage />
            </PageTransition>
          }
        />
        <Route
          path="/company-name-change"
          element={
            <PageTransition>
              <CompanyNameChangePage />
            </PageTransition>
          }
        /> <Route
        path="/digital-signature-certificate"
        element={
          <PageTransition>
            <DigitalSignatureCertificatePage />
          </PageTransition>
        }
      /><Route
      path="/IEC-importexportcode"
      element={
        <PageTransition>
          <IECImportExportCodePage />
        </PageTransition>
      }
    /><Route
    path="/spiceboard-registration"
    element={
      <PageTransition>
        <SpiceBoardRegistrationPage />
      </PageTransition>
    }
  />
  <Route
    path="/udyam-registration"
    element={
      <PageTransition>
        <UdyogAadharRegistrationPage />
      </PageTransition>
    }
  />
        <Route
          path="/trademark-registration"
          element={
            <PageTransition>
              <TrademarkRegistrationPage />
            </PageTransition>
          }
        /><Route
        path="/APEDA-RCMC"
        element={
          <PageTransition>
            <APEDARCMCPage />
          </PageTransition>
        }
      /><Route
      path="/FIEO-registration"
      element={
        <PageTransition>
          <FIEORegistrationPage />
        </PageTransition>
      }
    /><Route
    path="/hallmark-registration"
    element={
      <PageTransition>
        <HallmarkRegistrationPage />
      </PageTransition>
    }
  />
        <Route
          path="/trademark-registration-individual"
          element={
            <PageTransition>
              <TrademarkRegistrationIndividualPage />
            </PageTransition>
          }
        />
        <Route
          path="/trademark-assignment"
          element={
            <PageTransition>
              <TrademarkAssignmentPage />
            </PageTransition>
          }
        />
        <Route
          path="/income-tax-return"
          element={
            <PageTransition>
              <IncomeTaxReturnPage />
            </PageTransition>
          }
        />
        <Route
          path="/online-esi-registration"
          element={
            <PageTransition>
              <ESIRegistrationPage />
            </PageTransition>
          }
        /><Route
        path="/BIS-certification"
        element={
          <PageTransition>
            <BISCertificationPage />
          </PageTransition>
        }
      />
        <Route
          path="/payroll-management-system"
          element={
            <PageTransition>
              <PayrollManagementPage />
            </PageTransition>
          }
        /><Route
        path="/liquor-license"
        element={
          <PageTransition>
            <LiquorLicensePage />
          </PageTransition>
        }
      />
      <Route
        path="/CLRA-registration"
        element={
          <PageTransition>
            <CLRARegistrationPage />
          </PageTransition>
        }
      />
      <Route
        path="/AD-code-registration"
        element={
          <PageTransition>
            <ADCodeRegistrationPage />
          </PageTransition>
        }
      />
      <Route
        path="/IRDAI-registration"
        element={
          <PageTransition>
            <IRDAIRegistrationPage />
          </PageTransition>
        }
      />
      <Route
        path="/drugs-and-cosmetics-license"
        element={
          <PageTransition>
            <DrugsAndCosmeticsLicensePage />
          </PageTransition>
        }
      />
      <Route
        path="/customer-clearance"
        element={
          <PageTransition>
            <CustomerClearancePage />
          </PageTransition>
        }
      />
      <Route
        path="/website-ecommerce-development"
        element={
          <PageTransition>
            <WebsiteEcommerceDevelopmentPage />
          </PageTransition>
        }
      />
      <Route
        path="/fundraising"
        element={
          <PageTransition>
            <FundraisingPage />
          </PageTransition>
        }
      />
         <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            }
          />
        </Route>
        <Route
          path="/iso-certification"
          element={
            <PageTransition>
              <ISOCertificationPage />
            </PageTransition>
          }
        />
        <Route
          path="/udyog-aadhaar-registration"
          element={
            <PageTransition>
              <UdyogAadharRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/trade-license-renewal"
          element={
            <PageTransition>
              <TradeLicenseRenewalPage />
            </PageTransition>
          }
        />
        <Route
          path="/psara-license"
          element={
            <PageTransition>
              <PSARALicensePage />
            </PageTransition>
          }
        />
        <Route
          path="/professional-tax-registration"
          element={
            <PageTransition>
              <ProfessionalTaxRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/online-pf-registration"
          element={
            <PageTransition>
              <PFRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/legal-metrology"
          element={
            <PageTransition>
              <LegalMetrologyRegistrationPage />
            </PageTransition>
          }
        />{" "}
        <Route
          path="/ngo-registration"
          element={
            <PageTransition>
              <NGORegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/fssai-license"
          element={
            <PageTransition>
              <FSSAIRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/international-business-setupPage"
          element={
            <PageTransition>
              <InternationalBusinessSetupPage />
            </PageTransition>
          }
        />
         <Route
          path="/login"
          element={
            <PageTransition>
              <LoginPage/>
            </PageTransition>
          }
        />
        <Route
          path="/talktoexpert"
          element={
            <PageTransition>
              <ConsultAndExpertForBusinessPage />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          }
        />
        <Route
          path="/digital-signature-certificate"
          element={
            <PageTransition>
              <DigitalSignatureCertificatePage />
            </PageTransition>
          }
        />
        <Route
          path="/iso-9001-certification"
          element={
            <PageTransition>
              <ISO9001CertificationPage />
            </PageTransition>
          }
        />
        <Route
          path="/iso-9000-2005-certification"
          element={
            <PageTransition>
              <ISO9000_2005CertificationPage />
            </PageTransition>
          }
        />
        <Route
          path="/iso-13485-certification"
          element={
            <PageTransition>
              <ISO13485CertificationPage />
            </PageTransition>
          }
        />
        <Route
          path="/iso-14001-certification"
          element={
            <PageTransition>
              <ISO14001CertificationPage />
            </PageTransition>
          }
        />
        <Route
          path="/iso-22000-certification"
          element={
            <PageTransition>
              <ISO22000CertificationPage />
            </PageTransition>
          }
        />
        <Route
          path="/iso-26000-consulting"
          element={
            <PageTransition>
              <ISO26000ConsultingPage />
            </PageTransition>
          }
        />
        <Route
          path="/iso-27001-certification"
          element={
            <PageTransition>
              <ISO27001CertificationPage />
            </PageTransition>
          }
        />
        <Route
          path="/iso-31000-certification"
          element={
            <PageTransition>
              <ISO31000CertificationPage />
            </PageTransition>
          }
        />
        <Route
          path="/benefits-of-iso-certification"
          element={
            <PageTransition>
              <BenefitsOfISOCertification />
            </PageTransition>
          }
        />
        <Route
          path="/ip-due-diligence"
          element={
            <PageTransition>
              <IpDueDiligencePage />
            </PageTransition>
          }
        />
        <Route
          path="/ip-litigation-support"
          element={
            <PageTransition>
              <IpLitigationSupportPage />
            </PageTransition>
          }
        />
        <Route
          path="/ip-strategy-consulting"
          element={
            <PageTransition>
              <IpStrategyConsultingPage />
            </PageTransition>
          }
        />
        <Route
          path="/international-ip-protection"
          element={
            <PageTransition>
              <InternationalIpProtectionPage />
            </PageTransition>
          }
        />
        <Route
          path="/patent-registration"
          element={
            <PageTransition>
              <PatentRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/copyright-registration"
          element={
            <PageTransition>
              <CopyrightRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/industrial-design-registration"
          element={
            <PageTransition>
              <IndustrialDesignRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/ip-valuation"
          element={
            <PageTransition>
              <IpValuationPage />
            </PageTransition>
          }
        />
        <Route
          path="/ip-licensing"
          element={
            <PageTransition>
              <IpLicensingPage />
            </PageTransition>
          }
        />
        <Route
          path="/ip-portfolio-management"
          element={
            <PageTransition>
              <IpPortfolioManagementPage />
            </PageTransition>
          }
        />
        <Route
          path="/pitch-deck"
          element={
            <PageTransition>
              <PitchDeckPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname !== "/dashboard" && <Navbar />}
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      {location.pathname !== "/dashboard" && <Footer />}
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
