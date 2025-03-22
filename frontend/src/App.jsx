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
import TrademarkRegistrationPage from "./Pages/Services/Trademark/Trademark/TrademarkRegistrationPage";
import TrademarkRegistrationIndividualPage from "./Pages/Services/Trademark/Trademark/TrademarkRegistrationIndividualPage";
import TrademarkAssignmentPage from "./Pages/Services/Trademark/Trademark/TrademarkAssignmentPage";
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
import MSMERegistrationPage from "./Pages/Services/BussinessSetup/MSMERegistrationPage";
import IECImportExportCodePage from "./Pages/Services/BussinessSetup/IECImportExportCodePage";
import SpiceBoardRegistrationPage from "./Pages/Services/BussinessSetup/SpiceBoardRegistrationPage";
import FIEORegistrationPage from "./Pages/Services/BussinessSetup/FIEORegistrationPage";
import HallmarkRegistrationPage from "./Pages/Services/BussinessSetup/HallmarkRegistrationPage";
import APEDARCMCPage from "./Pages/Services/BussinessSetup/APEDARCMCPage";
import TrademarkSearchPage from "./Pages/Services/Trademark/Trademark/TrademarkSearchPage";
import WellKnownTrademarkPage from "./Pages/Services/Trademark/Trademark/WellKnownTrademarkPage";
import TrademarkObjectionResponsePage from "./Pages/Services/Trademark/Trademark/TrademarkObjectionResponsePage";
import TrademarkWatchPage from "./Pages/Services/Trademark/Trademark/TrademarkWatchPage";
import TrademarkRenewal from "./Pages/Services/Trademark/Trademark/TrademarkRenewalPage";
import TrademarkRegistrationUSAPage from "./Pages/Services/Trademark/Trademark/TrademarkRegistrationUSAPage";
import TrademarkRegistrationInternationalPage from "./Pages/Services/Trademark/Trademark/TrademarkRegistrationInternationalPage";
import CopyrightMusicPage from "./Pages/Services/Trademark/Copyright/CopyrightMusicPage";
import CopyrightInfringementPage from "./Pages/Services/Trademark/Infringement/CopyrightInfringementPage";
import ProvisionalPatentApplicationPage from "./Pages/Services/Petent/ProvisionalPatentApplicationPage";
import PatentInfringementPage from "./Pages/Services/Trademark/Infringement/PatentInfringementPage";
import TrademarkInfringementPage from "./Pages/Services/Trademark/Infringement/TrademarkInfringementPage";
import LogoDesignPage from "./Pages/Services/Trademark/DesignRegistration/LogoDesignPage";
import DesignRegistrationPage from "./Pages/Services/Trademark/DesignRegistration/DesignRegistrationPage";
import BISCertificationPage from "./Pages/Services/BussinessSetup/BISCertificationPage";
import PitchDeckPage from "./Pages/Others/Fundraising/PitchDeckPage";
import FundraisingPage from "./Pages/Others/Fundraising/FundraisingPage";
import DPRServicePage from "./Pages/Others/Fundraising/DPRServicePage";
import Section8CompanyPage from "./Pages/Others/NGO/Section8CompanyPage";
import TrustRegistrationPage from "./Pages/Others/NGO/TrustRegistrationPage";
import SocietyRegistrationPage from "./Pages/Others/NGO/SocietyRegistrationPage";
import NGOCompliancePage from "./Pages/Others/NGO/NGOCompliancePage";
import Section8CompliancePage from "./Pages/Others/NGO/Section8CompliancePage";
import CSR1FilingPage from "./Pages/Others/NGO/CSR1FilingPage";
import Section80G12APage from "./Pages/Others/NGO/Section80G12APage";
import DarpanRegistrationPage from "./Pages/Others/NGO/DarpanRegistrationPage";
import FCRARegistrationPage from "./Pages/Others/NGO/FCRARegistrationPage";
import PropertyTitleVerificationPage from "./Pages/Others/Property/PropertyTitleVerificationPage";
import PropertyRegistrationPage from "./Pages/Others/Property/PropertyRegistrationPage";
import ReraComplaintPage from "./Pages/Others/Property/ReraComplaintPage";
import GunLicensePage from "./Pages/Others/Property/GunLicensePage";
import NameChangePage from "./Pages/Others/Property/NameChangePage";
import ReligionChangePage from "./Pages/Others/Property/ReligionChangePage";
import GenderChangePage from "./Pages/Others/Property/GenderChangePage";
import OnlinePoliceComplaintPage from "./Pages/Others/Property/OnlinePoliceComplaintPage";
import MarriageRegistrationPage from "./Pages/Others/Property/MarriageRegistrationPage";
import CourtMarriagePage from "./Pages/Others/Property/CourtMarriagePage";
import MutualDivorcePage from "./Pages/Others/Property/MutualDivorcePage";
import DivorceAlimonyPage from "./Pages/Others/Property/DivorceAlimonyPage";
import RestitutionOfConjugalRightsPage from "./Pages/Others/Property/RestitutionOfConjugalRightsPage";
import CorporateImmigrationPage from "./Pages/Others/Property/CorporateImmigrationPage";
import FamilyImmigrationPage from "./Pages/Others/Property/FamilyImmigrationPage";
import CollegeImmigrationPage from "./Pages/Others/Property/CollegeImmigrationPage";
import OnlineConsumerComplaintPage from "./Pages/Others/Property/OnlineConsumerComplaintPage";
import BusinessLoanPage from "./Pages/Others/Fundraising/BusinessLoanPage";

// import PitchDeckPage from "./Pages/Others/PitchDeckPage";
import LiquorLicensePage from "./Pages/Services/BussinessSetup/LiquorLicensePage";
import CLRARegistrationPage from "./Pages/Services/BussinessSetup/CLRARegistrationPage";
import ADCodeRegistrationPage from "./Pages/Services/BussinessSetup/ADCodeRegistrationPage";
import IRDAIRegistrationPage from "./Pages/Services/BussinessSetup/IRDAIRegistrationPage";
import DrugsAndCosmeticsLicensePage from "./Pages/Services/BussinessSetup/DrugsAndCosmeticsLicensePage";
import CustomerClearancePage from "./Pages/Services/BussinessSetup/CustomerClearancePage";
import LegalDocumentsPage from "./Pages/Documents/All_docs/LegalDocumentsPage";
import RentalAgreementPage from "./Pages/Documents/All_docs/RentalAgreementPage ";
import CommercialRentalAgreementPage from "./Pages/Documents/All_docs/CommercialRentalAgreementPage ";
import ExperienceLetterPage from "./Pages/Documents/All_docs/ExperienceLetterPage ";
import AppointmentLetterPage from "./Pages/Documents/All_docs/AppointmentLetterPage";
import AffidavitFormatPage from "./Pages/Documents/All_docs/AffidavitFormatPage ";
import PowerOfAttorneyPage from "./Pages/Documents/All_docs/PowerOfAttorneyPage";
import IncomeCertificatePage from "./Pages/Documents/All_docs/IncomeCertificatePage";
import NoObjectionCertificatePage from "./Pages/Documents/All_docs/NoObjectionCertificatePage";
import SalarySlipPage from "./Pages/Documents/All_docs/SalarySlipPage";
import ResignationLetterPage from "./Pages/Documents/All_docs/ResignationLetterPage";
import LegalHeirCertificatePage from "./Pages/Documents/All_docs/LegalHeirCertificatePage";
import RelievingLetterPage from "./Pages/Documents/All_docs/RelievingLetterPage ";
import BonafideCertificatePage from "./Pages/Documents/All_docs/BonafideCertificatePage ";
import GstInvoicePage from "./Pages/Documents/All_docs/GstInvoicePage ";
import AuthorizedSignatoryGstPage from "./Pages/Documents/All_docs/AuthorizedSignatoryGstPage ";
import DeliveryChallanPage from "./Pages/Documents/All_docs/DeliveryChallanPage ";
import OfferLetterPage from "./Pages/Documents/All_docs/OfferLetterPage ";
import ConsentLetterGstRegistrationPage from "./Pages/Documents/All_docs/ConsentLetterGstRegistrationPage ";
import RentReceiptPage from "./Pages/Documents/All_docs/RentReceiptPage ";
import NonDisclosureAgreementPage from "./Pages/Documents/Bussiness_docs/NonDisclosureAgreementPage ";
import ServiceLevelAgreementPage from "./Pages/Documents/Bussiness_docs/ServiceLevelAgreementPage ";
import FranchiseAgreementPage from "./Pages/Documents/Bussiness_docs/FranchiseAgreementPage ";
import MasterServiceAgreementPage from "./Pages/Documents/Bussiness_docs/MasterServiceAgreementPage ";
import ShareholdersAgreementPage from "./Pages/Documents/Bussiness_docs/ShareholdersAgreementPage";
import JointVentureAgreementPage from "./Pages/Documents/Bussiness_docs/JointVentureAgreementPage ";
import FounderAgreementPage from "./Pages/Documents/Bussiness_docs/FounderAgreementPage ";
import VendorAgreementPage from "./Pages/Documents/Bussiness_docs/VendorAgreementPage ";
import ConsultancyAgreementPage from "./Pages/Documents/Bussiness_docs/ConsultancyAgreementPage ";
import SuccessionCertificatePage from "./Pages/Documents/Bussiness_docs/SuccessionCertificatePage ";
import ScopeOfWorkAgreementPage from "./Pages/Documents/Bussiness_docs/ScopeOfWorkAgreementPage ";
import SharePurchaseAgreementPage from "./Pages/Documents/Bussiness_docs/SharePurchaseAgreementPage ";
import RelinquishmentDeedPage from "./Pages/Documents/Bussiness_docs/RelinquishmentDeedPage ";
import LegalNoticePage from "./Pages/Documents/Notices/LegalNoticePage";
import LegalNoticeMoneyRecoveryPage from "./Pages/Documents/Notices/LegalNoticeMoneyRecoveryPage";
import LegalNoticeRecoveryOfDuesPage from "./Pages/Documents/Notices/LegalNoticeRecoveryOfDuesPage";
import ChequeBounceNoticePage from "./Pages/Documents/Notices/ChequeBounceNoticePage";
import LegalNoticeConsumerProtectionActPage from "./Pages/Documents/Notices/LegalNoticeConsumerProtectionActPage";
import EmploymentAgreementPage from "./Pages/Documents/Notices/EmploymentAgreementPage";
import PayrollMaintenancePage from "./Pages/Documents/Notices/PayrollMaintenancePage";
import ESOPPage from "./Pages/Documents/Notices/ESOPPage";
import TradeLicenseCertificatePage from "./Pages/Documents/Bussiness_docs/TradeLicenseCertificatePage ";
import NonCompeteAgreementPage from "./Pages/Documents/Bussiness_docs/NonCompeteAgreementPage ";
import FinanceAgreementPage from "./Pages/Documents/Bussiness_docs/FinanceAgreementPage";
import GDPRPage from "./Pages/Documents/Bussiness_docs/GDPRPage ";
import WillRegistrationPage from "./Pages/Documents/Family/WillRegistrationPage ";
import ProbateOfWillPage from "./Pages/Documents/Family/ProbateOfWillPage ";
import SaleDeedPage from "./Pages/Documents/Family/SaleDeedPage ";
import GiftDeedPage from "./Pages/Documents/Family/formData";
import RentalTenantNoticePage from "./Pages/Documents/Family/RentalTenantNoticePage ";
import WebsiteEcommerceDevelopmentPage from "./Pages/Services/BussinessSetup/WebsiteEcommerceDevelopmentPage";
import UdyamRegistrationPage from "./Pages/Services/BussinessSetup/UdyamRegistrationPage";



///Now Doing THe 
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
          path="/website-ecommerce-development"
          element={
            <PageTransition>
              <WebsiteEcommerceDevelopmentPage />
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
          path="/partnership-deed-format-download"
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
        />{" "}
        <Route
          path="/digital-signature-certificate"
          element={
            <PageTransition>
              <DigitalSignatureCertificatePage />
            </PageTransition>
          }
        />
        <Route
          path="/IEC-importexportcode"
          element={
            <PageTransition>
              <IECImportExportCodePage />
            </PageTransition>
          }
        />
        <Route
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
              <UdyamRegistrationPage />
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
        />
        <Route
          path="/APEDA-RCMC"
          element={
            <PageTransition>
              <APEDARCMCPage />
            </PageTransition>
          }
        />
        <Route
          path="/FIEO-registration"
          element={
            <PageTransition>
              <FIEORegistrationPage />
            </PageTransition>
          }
        />
        <Route
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
          path="/trademark-search"
          element={
            <PageTransition>
              <TrademarkSearchPage />
            </PageTransition>
          }
        />
        <Route
          path="/well-known-trademark"
          element={
            <PageTransition>
              <WellKnownTrademarkPage />
            </PageTransition>
          }
        />
        <Route
          path="/respond-to-tm-objection"
          element={
            <PageTransition>
              <TrademarkObjectionResponsePage />
            </PageTransition>
          }
        />
        <Route
          path="/trademark-watch"
          element={
            <PageTransition>
              <TrademarkWatchPage />
            </PageTransition>
          }
        />
        <Route
          path="/trademark-renewal"
          element={
            <PageTransition>
              <TrademarkRenewal />
            </PageTransition>
          }
        />
        <Route
          path="/usa-trademark"
          element={
            <PageTransition>
              <TrademarkRegistrationUSAPage />
            </PageTransition>
          }
        />
        <Route
          path="/international-trademark"
          element={
            <PageTransition>
              <TrademarkRegistrationInternationalPage />
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
          path="/copyright-music"
          element={
            <PageTransition>
              <CopyrightMusicPage />
            </PageTransition>
          }
        />
        <Route
          path="/provisional-patent-application"
          element={
            <PageTransition>
              <ProvisionalPatentApplicationPage />
            </PageTransition>
          }
        />
        <Route
          path="/copyright-infringement"
          element={
            <PageTransition>
              <CopyrightInfringementPage />
            </PageTransition>
          }
        />
        <Route
          path="/patent-infringement"
          element={
            <PageTransition>
              <PatentInfringementPage />
            </PageTransition>
          }
        />
        <Route
          path="/trademark-infringement"
          element={
            <PageTransition>
              <TrademarkInfringementPage />
            </PageTransition>
          }
        />
        <Route
          path="/logo-design"
          element={
            <PageTransition>
              <LogoDesignPage />
            </PageTransition>
          }
        />
        <Route
          path="/design-registration"
          element={
            <PageTransition>
              <DesignRegistrationPage />
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
        />
        <Route
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
          path="/online-esi-registration"
          element={
            <PageTransition>
              <ESIRegistrationPage />
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
              <LoginPage />
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
        <Route
          path="/fundraising"
          element={
            <PageTransition>
              <FundraisingPage />
            </PageTransition>
          }
        />
        <Route
          path="/drp-service"
          element={
            <PageTransition>
              <DPRServicePage />
            </PageTransition>
          }
        />
        <Route
          path="/business-loan"
          element={
            <PageTransition>
              <BusinessLoanPage />
            </PageTransition>
          }
        />
        <Route
          path="/section-8-company"
          element={
            <PageTransition>
              <Section8CompanyPage />
            </PageTransition>
          }
        />
        <Route
          path="/trust-registration"
          element={
            <PageTransition>
              <TrustRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/society-registration"
          element={
            <PageTransition>
              <SocietyRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/ngo-compliance"
          element={
            <PageTransition>
              <NGOCompliancePage />
            </PageTransition>
          }
        />
        <Route
          path="/section-8-compliance"
          element={
            <PageTransition>
              <Section8CompliancePage />
            </PageTransition>
          }
        />
        <Route
          path="/csr-1-filing"
          element={
            <PageTransition>
              <CSR1FilingPage />
            </PageTransition>
          }
        />
        <Route
          path="/sec-80g-sec-12a"
          element={
            <PageTransition>
              <Section80G12APage />
            </PageTransition>
          }
        />
        <Route
          path="/darpan-registration"
          element={
            <PageTransition>
              <DarpanRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/fcra-registration"
          element={
            <PageTransition>
              <FCRARegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/property-title-verification"
          element={
            <PageTransition>
              <PropertyTitleVerificationPage />
            </PageTransition>
          }
        />
        <Route
          path="/property-registration"
          element={
            <PageTransition>
              <PropertyRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/rera-complaint"
          element={
            <PageTransition>
              <ReraComplaintPage />
            </PageTransition>
          }
        />
        <Route
          path="/gun-license"
          element={
            <PageTransition>
              <GunLicensePage />
            </PageTransition>
          }
        />
        <Route
          path="/name-change"
          element={
            <PageTransition>
              <NameChangePage />
            </PageTransition>
          }
        />
        <Route
          path="/religion-change"
          element={
            <PageTransition>
              <ReligionChangePage />
            </PageTransition>
          }
        />
        <Route
          path="/gender-change"
          element={
            <PageTransition>
              <GenderChangePage />
            </PageTransition>
          }
        />
        <Route
          path="/online-police-complaint"
          element={
            <PageTransition>
              <OnlinePoliceComplaintPage />
            </PageTransition>
          }
        />
        <Route
          path="/marriage-registration"
          element={
            <PageTransition>
              <MarriageRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/court-marriage"
          element={
            <PageTransition>
              <CourtMarriagePage />
            </PageTransition>
          }
        />
        <Route
          path="/mutual-divorce"
          element={
            <PageTransition>
              <MutualDivorcePage />
            </PageTransition>
          }
        />
        <Route
          path="/divorce-alimony"
          element={
            <PageTransition>
              <DivorceAlimonyPage />
            </PageTransition>
          }
        />
        <Route
          path="/restitution-conjugal-rights"
          element={
            <PageTransition>
              <RestitutionOfConjugalRightsPage />
            </PageTransition>
          }
        />
        <Route
          path="/corporate-immigration"
          element={
            <PageTransition>
              <CorporateImmigrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/family-immigration"
          element={
            <PageTransition>
              <FamilyImmigrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/college-immigration"
          element={
            <PageTransition>
              <CollegeImmigrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/online-consumer-complaint"
          element={
            <PageTransition>
              <OnlineConsumerComplaintPage />
            </PageTransition>
          }
        />
            

        {/*Document Routes*/}
        <Route
          path="/documents"
          element={
            <PageTransition>
              <LegalDocumentsPage />
            </PageTransition>
          }
        />
        <Route
          path="/rental-agreement-download-format"
          element={
            <PageTransition>
              <RentalAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/commercial-rental-agreement"
          element={
            <PageTransition>
              <CommercialRentalAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/experience-letter-format"
          element={
            <PageTransition>
              <ExperienceLetterPage />
            </PageTransition>
          }
        />
        <Route
          path="/appointment-letter-format"
          element={
            <PageTransition>
              <AppointmentLetterPage />
            </PageTransition>
          }
        />
        <Route
          path="/affidavit-format-download"
          element={
            <PageTransition>
              <AffidavitFormatPage />
            </PageTransition>
          }
        />
        <Route
          path="/power-of-attorney-format"
          element={
            <PageTransition>
              <PowerOfAttorneyPage />
            </PageTransition>
          }
        />
        <Route
          path="/income-certificate-format-download"
          element={
            <PageTransition>
              <IncomeCertificatePage />
            </PageTransition>
          }
        />
        <Route
          path="/no-objection-certificate-noc-format-download"
          element={
            <PageTransition>
              <NoObjectionCertificatePage />
            </PageTransition>
          }
        />
        <Route
          path="/salary-slip-sample-download"
          element={
            <PageTransition>
              <SalarySlipPage />
            </PageTransition>
          }
        />
        <Route
          path="/resignation-letter-format-download"
          element={
            <PageTransition>
              <ResignationLetterPage />
            </PageTransition>
          }
        />
        <Route
          path="/legal-heir-certificate-format-download"
          element={
            <PageTransition>
              <LegalHeirCertificatePage />
            </PageTransition>
          }
        />
        <Route
          path="/relieving-letter-format"
          element={
            <PageTransition>
              <RelievingLetterPage />
            </PageTransition>
          }
        />
        <Route
          path="/bonafide-certificate-format-download"
          element={
            <PageTransition>
              <BonafideCertificatePage />
            </PageTransition>
          }
        />
        <Route
          path="/gst-invoice-format"
          element={
            <PageTransition>
              <GstInvoicePage />
            </PageTransition>
          }
        />
        <Route
          path="/authorised-signatory-in-gst"
          element={
            <PageTransition>
              <AuthorizedSignatoryGstPage />
            </PageTransition>
          }
        />
        <Route
          path="/delivery-challan-format"
          element={
            <PageTransition>
              <DeliveryChallanPage />
            </PageTransition>
          }
        />
        <Route
          path="/offer-letter-format"
          element={
            <PageTransition>
              <OfferLetterPage />
            </PageTransition>
          }
        />
        <Route
          path="/consent-letter-for-gst-registration-format-download"
          element={
            <PageTransition>
              <ConsentLetterGstRegistrationPage />
            </PageTransition>
          }
        />
        <Route
          path="/generate-free-rent-receipt"
          element={
            <PageTransition>
              <RentReceiptPage />
            </PageTransition>
          }
        />
        <Route
          path="/non-disclosure-agreement-nda"
          element={
            <PageTransition>
              <NonDisclosureAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/service-level-agreement"
          element={
            <PageTransition>
              <ServiceLevelAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/franchise-agreement"
          element={
            <PageTransition>
              <FranchiseAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/master-service-agreement"
          element={
            <PageTransition>
              <MasterServiceAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/shareholders-agreement"
          element={
            <PageTransition>
              <ShareholdersAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/joint-venture-agreement"
          element={
            <PageTransition>
              <JointVentureAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/founders-agreement"
          element={
            <PageTransition>
              <FounderAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/vendor-agreement"
          element={
            <PageTransition>
              <VendorAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/consultancy-agreement"
          element={
            <PageTransition>
              <ConsultancyAgreementPage />
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
          path="/memorandum-of-understanding"
          element={
            <PageTransition>
              <MOUDraftingPage />
            </PageTransition>
          }
        />
        <Route
          path="/succession-certificate"
          element={
            <PageTransition>
              <SuccessionCertificatePage />
            </PageTransition>
          }
        />
        <Route
          path="/scope-of-work-agreement"
          element={
            <PageTransition>
              <ScopeOfWorkAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/share-purchase-agreement"
          element={
            <PageTransition>
              <SharePurchaseAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/relinquishment-deed"
          element={
            <PageTransition>
              <RelinquishmentDeedPage />
            </PageTransition>
          }
        />
        <Route
          path="/legal-heir-certificate"
          element={
            <PageTransition>
              <LegalHeirCertificatePage />
            </PageTransition>
          }
        />
        <Route
          path="/legal-notice"
          element={
            <PageTransition>
              <LegalNoticePage />
            </PageTransition>
          }
        />
        <Route
          path="/legal-notice-for-money-recovery"
          element={
            <PageTransition>
              <LegalNoticeMoneyRecoveryPage />
            </PageTransition>
          }
        />
        <Route
          path="/legal-notice-for-recovery-of-dues"
          element={
            <PageTransition>
              <LegalNoticeRecoveryOfDuesPage />
            </PageTransition>
          }
        />
        <Route
          path="/cheque-bounce-notice"
          element={
            <PageTransition>
              <ChequeBounceNoticePage />
            </PageTransition>
          }
        />
        <Route
          path="/legal-notice-under-consumer-protection-act"
          element={
            <PageTransition>
              <LegalNoticeConsumerProtectionActPage />
            </PageTransition>
          }
        />
        <Route
          path="/employment-agreement"
          element={
            <PageTransition>
              <EmploymentAgreementPage />
            </PageTransition>
          }
        />
        <Route
          path="/payroll-maintenance"
          element={
            <PageTransition>
              <PayrollMaintenancePage />
            </PageTransition>
          }
        />
        <Route
          path="/esop"
          element={
            <PageTransition>
              <ESOPPage />
            </PageTransition>
          }
        />
        <Route path="/legal-heir-certificate"
        element={
          <PageTransition>
            <LegalHeirCertificatePage    />
          </PageTransition>
        }
      /> 
      <Route
        path="/trade-license"
        element={
          <PageTransition>
            <TradeLicenseCertificatePage    />
          </PageTransition>
        }
      /> 
      <Route
        path="/noncompete-agreement"
        element={
          <PageTransition>
            <NonCompeteAgreementPage    />
          </PageTransition>
        }
      /> 
        <Route
        path="/finance-agreement"
        element={
          <PageTransition>
            <FinanceAgreementPage    />
          </PageTransition>
        }
      /> 
      <Route
        path="/gdpr"
        element={
          <PageTransition>
            <GDPRPage    />
          </PageTransition>
        }
      /> 
      <Route
        path="/will-registration"
        element={
          <PageTransition>
            <WillRegistrationPage    />
          </PageTransition>
        }
      /> 
          <Route
        path="/probate-of-will"
        element={
          <PageTransition>
            <ProbateOfWillPage    />
          </PageTransition>
        }
      /> 
        <Route
        path="/power-of-attorney"
        element={
          <PageTransition>
            <PowerOfAttorneyPage    />
          </PageTransition>
        }
      /> 
        <Route
        path="/rental-agreement"
        element={
          <PageTransition>
            <RentalAgreementPage    />
          </PageTransition>
        }
      /> 
        <Route
        path="/sale-deed"
        element={
          <PageTransition>
            <SaleDeedPage    />
          </PageTransition>
        }
      /> 
       <Route
        path="/gift-deed"
        element={
          <PageTransition>
            <GiftDeedPage    />
          </PageTransition>
        }
      /> 
       <Route
        path="/rental-tenant-notice"
        element={
          <PageTransition>
            <RentalTenantNoticePage    />
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
