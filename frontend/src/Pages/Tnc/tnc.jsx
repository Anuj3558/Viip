import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const TermsAndConditions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };

  const sections = [
    {
      title: '1. Introduction',
      content: (
        <p className="text-gray-700">
          Welcome to Vastav Intellect IP Solutions LLP ("VIIPS," "we," "our," or "us"), a professional consultancy and legal-tech firm registered under the Limited Liability Partnership Act, 2008. By accessing our website (www.vastavintellect.com) or using any of our services, you ("Client," "User," or "You") agree to be legally bound by the following Terms & Conditions. These terms govern all engagements between you and VIIPS, covering both digital and offline interactions. If you do not agree with any part of these terms, please refrain from using our services.
        </p>
      ),
    },
    {
      title: '2. Service Portfolio',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">2.1 Intellectual Property Services</h4>
            <p className="text-gray-700 mb-2">We provide comprehensive support across all domains of intellectual property (IP):</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Patent Services:</span> Our services include prior art search, patentability analysis, drafting of provisional and complete specifications, filing (Indian and PCT applications), responding to examination reports, and assisting with patent commercialization and licensing strategies.
              </li>
              <li>
                <span className="font-medium">Trademark Services:</span> We offer end-to-end services for trademark clearance, filing under all 45 classes, opposition handling, renewals, assignments, and international filings through the Madrid Protocol.
              </li>
              <li>
                <span className="font-medium">Copyright & Design Registration:</span> VIIPS assists in registering copyrights for literary, software, artistic, and musical works. We also provide services for industrial design filings, infringement analysis, and licensing agreements.
              </li>
              <li>
                <span className="font-medium">Geographical Indications (GI):</span> We assist in drafting and filing GI applications and offer legal strategies for their protection and enforcement, particularly for community-based products.
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">2.2 Business Formation & Regulatory Compliance</h4>
            <p className="text-gray-700 mb-2">We guide startups and established businesses through every step of legal formation and compliance:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Company Incorporation:</span> Our team manages incorporation of Private Limited, LLP, and One Person Companies (OPC), including obtaining Digital Signature Certificates (DSC), Director Identification Numbers (DIN), drafting of Memorandum of Association (MOA) and Articles of Association (AOA), and other founding documents.
              </li>
              <li>
                <span className="font-medium">Licensing & Registrations:</span> We handle GST registration and filing, MSME/Udyam registration, FSSAI licensing for food businesses, Import Export Code (IEC) registration, and specialized licenses like PSARA (for security agencies).
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">2.3 ISO & Certification Services</h4>
            <p className="text-gray-700">VIIPS supports organizations in achieving international certifications that enhance credibility and quality standards. We assist in ISO gap analysis, documentation, and implementation for ISO 9001 (Quality), ISO 14001 (Environment), ISO 27001 (Information Security), and ISO 22000 (Food Safety). Our experts also provide support for audit readiness, certification maintenance, and surveillance audits.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">2.4 Corporate & Legal Documentation</h4>
            <p className="text-gray-700">We ensure your contracts and legal paperwork meet industry and regulatory standards. Our services include drafting and vetting of shareholder agreements, employment contracts, NDAs, term sheets, MOUs, and licensing or franchise agreements. We also assist in drafting legal notices and representation in disputes related to intellectual property or contracts.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">2.5 Financial, Investment & Growth Advisory</h4>
            <p className="text-gray-700">We help businesses scale and secure funding with strategic guidance. Our experts prepare business plans, detailed project reports (DPR), and investor pitch decks. We offer guidance on fundraising strategies, investor relations, term sheet review, and negotiation support with venture capitalists, angel investors, and public funding agencies.</p>
          </div>
        </div>
      ),
    },
    {
      title: '3. Client Responsibilities',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">Clients engaging VIIPS must adhere to the following responsibilities to ensure timely and effective service delivery:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Information Accuracy:</span> You must provide accurate, complete, and current information. Misrepresentation or fraudulent declarations may result in immediate service termination without refund.</li>
            <li><span className="font-medium">Document Submission:</span> All required documents must be submitted in the prescribed formats, and where necessary, notarized or translated by certified professionals.</li>
            <li><span className="font-medium">Authorized Communication:</span> All communication must take place via official VIIPS channels (email, phone, helpdesk). Clients are encouraged to appoint an authorized point of contact for consistent communication.</li>
            <li><span className="font-medium">Compliance with Law:</span> Clients must not misuse any deliverables provided by VIIPS for unlawful or unethical activities, including but not limited to, misrepresenting registered IP or using documents for fraudulent purposes.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '4. Fees, Taxes & Payment Terms',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Fee Structure:</span> Our pricing includes professional service charges plus applicable government or statutory fees. All prices mentioned are exclusive of GST and other taxes, unless specifically stated otherwise.</li>
            <li><span className="font-medium">Payment Terms:</span> Payments must be made in advance or as per the mutually agreed milestone schedule. Delays in payment beyond 10 days may attract an interest of 2% per month on the outstanding balance.</li>
            <li><span className="font-medium">Refund Policy:</span> Once a service is initiated, no refunds shall be issued. Partial refunds may be granted for uninitiated services, after deducting administrative charges. Government fees are non-refundable unless refunded by the concerned authority.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '5. Intellectual Property Rights',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Client Ownership:</span> All intellectual property rights related to your submitted data or documents remain with you.</li>
            <li><span className="font-medium">VIIPS Ownership:</span> All methodologies, templates, processes, tools, and internal systems used by VIIPS remain our exclusive property. Clients are granted a limited, non-transferable license to use deliverables solely for intended purposes.</li>
            <li><span className="font-medium">No Reproduction:</span> Clients may not reproduce, sell, or distribute VIIPS templates or documents without written permission.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '6. Confidentiality & Data Protection',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">VIIPS maintains the highest standards of data protection and confidentiality:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Confidential Handling:</span> Client data is stored securely with access granted only to authorized personnel. We employ encryption and regular backups to ensure data integrity.</li>
            <li><span className="font-medium">Disclosure:</span> Your information will not be disclosed to third parties unless required by law or with your prior written consent. VIIPS may use anonymized and non-identifiable data for internal research, case studies, or training purposes.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '7. Use of Media & Promotional Content',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">By engaging with VIIPS:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clients consent to the non-personal, non-confidential usage of project outcomes (e.g., success stories, completion highlights) in promotional materials, newsletters, and social media—without revealing sensitive or personal information.</li>
            <li>Any media (photos, logos, banners) provided for collaborative promotion or events may be used by VIIPS with proper attribution.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '8. Service Timelines & Updates',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Turnaround Times:</span> Estimated service timelines are provided at the time of engagement. While we strive to meet them, delays may occur due to third-party or government processing times.</li>
            <li><span className="font-medium">Expedited Services:</span> Fast-track options are available for specific services on payment of additional fees.</li>
            <li><span className="font-medium">Progress Reporting:</span> Clients will receive periodic updates, and real-time tracking may be available via client dashboards (where applicable).</li>
          </ul>
        </div>
      ),
    },
    {
      title: '9. Customer Satisfaction Commitment',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">We are committed to providing exceptional service to every client:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Feedback Mechanism:</span> We welcome client feedback through helpdesk@vastavintellect.com or our dedicated support line.</li>
            <li><span className="font-medium">Issue Resolution:</span> In case of dissatisfaction, clients are encouraged to contact the Grievance Officer. We aim to resolve issues within 15 business days of formal complaint receipt.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '10. Limitation of Liability',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS provides consultancy and advisory services in good faith and in compliance with applicable laws. However, we do not guarantee government approvals or registrations.</li>
            <li>Our liability in any case will be limited to the amount paid for the specific service. We are not liable for any indirect, incidental, or consequential damages.</li>
            <li>Delays or failures due to force majeure events (natural disasters, internet outages, strikes) are not covered under service guarantees.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '11. Termination & Suspension',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Client-Initiated Termination:</span> You may terminate services by giving written notice. All pending dues must be cleared, and all shared data will be securely archived or deleted on request.</li>
            <li><span className="font-medium">VIIPS-Initiated Termination:</span> We reserve the right to terminate services if a client violates legal or ethical guidelines, misuses service output, or fails to make payments.</li>
            <li>Ongoing legal filings or registrations will continue until logical completion, unless explicitly withdrawn by the client.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '12. Dispute Resolution & Jurisdiction',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Amicable Resolution:</span> Disputes should first be attempted to be resolved amicably within 30 days of notification.</li>
            <li><span className="font-medium">Arbitration:</span> If unresolved, disputes shall be referred to binding arbitration in New Delhi, in accordance with UNCITRAL Rules.</li>
            <li><span className="font-medium">Jurisdiction:</span> These Terms & Conditions are governed by Indian law, with exclusive jurisdiction lying with courts in Delhi, India.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '13. Modifications & Notices',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS reserves the right to modify these Terms at any time. Updated terms will be published on our website. Continued use of services implies acceptance of the modified terms.</li>
            <li>Any changes will be communicated via email, website updates, or SMS notifications.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '14. Certifications, Registrations & Government Recognition',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">VIIPS is officially recognized and certified under the following government and regulatory bodies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Registered with Ministry of Corporate Affairs, Government of India under the LLP Act.</li>
            <li>Recognized as a Start-up India registered entity by DPIIT.</li>
            <li>Certified by MSME (Udyam Registration) for availing applicable schemes.</li>
            <li>ISO-compliant for internal quality and process management.</li>
          </ul>
          <p className="mt-2"><strong>Note:</strong> While VIIPS is engaged with various government-related filings, it is not a government agency or body. We act solely as consultants and facilitators.</p>
        </div>
      ),
    },
    {
      title: '15. Institutional Affiliations & MoUs',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS may enter into Memorandums of Understanding (MoUs) with academic institutions, incubation centers, and NGOs to provide IPR training, workshops, and startup support services.</li>
            <li>Clients or students engaged through such institutions will be bound by both the institutional policies and VIIPS Terms.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '16. Use of Automation & AI Tools',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">To enhance client experience and accuracy, VIIPS may use licensed Artificial Intelligence (AI) tools, document review systems, plagiarism checks, and auto-drafting platforms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Such tools are used only to improve efficiency and are subject to internal confidentiality policies.</li>
            <li>No third-party platform is allowed to access client-sensitive data unless governed by a data processing agreement.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '17. Training, Workshops & Awareness Programs',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS conducts regular training programs, webinars, workshops, and boot camps for startups, faculty, researchers, and students.</li>
            <li>Attendees must pre-register via our official platforms. Certificates of participation or achievement may be issued based on evaluation criteria and attendance.</li>
            <li>Workshop content is proprietary and may not be reused or reproduced without permission.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '18. Participation in Competitions or Ideathons',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">For any competitions, ideathons, or startup fests organized by VIIPS:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Participants agree to abide by the rules shared at the time of registration.</li>
            <li>Submission of original work is mandatory. Any plagiarism or misconduct may result in disqualification.</li>
            <li>VIIPS holds the right to promote the event winners and showcase select ideas with due credit.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '19. Third-Party Partnerships & Disclaimer',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS may refer or collaborate with external service providers (e.g., design experts, financial consultants, or legal firms) upon client request or for specialized needs.</li>
            <li>VIIPS is not responsible for delays, errors, or deficiencies in services provided by third parties unless under a written agreement.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '20. Use of Client Logos & Testimonials',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>With written or email consent, VIIPS may use client logos and testimonials on its website, brochures, or marketing materials.</li>
            <li>Clients have the right to revoke such permission at any time with written notice, after which materials will be removed within 15 working days.</li>
          </ul>
        </div>
      ),
    },
    // Adding remaining sections
    {
      title: '21. Policy on Student Engagement & Internships',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS hosts internships and research opportunities through structured programs, either directly or in collaboration with educational institutions.</li>
            <li>Selected students or interns must abide by internship agreements, adhere to professional conduct, and maintain confidentiality.</li>
            <li>Completion certificates will only be awarded after evaluation and approval by the supervising mentor.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '22. Referral & Affiliate Policy',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Clients and partners may participate in our referral or affiliate programs, subject to specific terms defined at the time of program launch.</li>
            <li>Referral incentives are only applicable upon successful conversion and payment by referred clients.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '23. Intellectual Property in Training Materials',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">All content developed or presented by VIIPS during workshops, webinars, or consultancy projects is protected under copyright law:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unauthorized sharing, duplication, or commercial use of such materials (slides, eBooks, PDFs, videos, toolkits) is strictly prohibited.</li>
            <li>Requests for academic use must be formally approved by VIIPS.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '24. Policy on Institutional Incubation Support',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Incubation centers supported by VIIPS receive structured mentoring and startup documentation support.</li>
            <li>MoUs signed with institutions will include IP commercialization frameworks, startup policy suggestions, and institutional innovation council (IIC) activities.</li>
            <li>Institutions must report outcomes and maintain records of utilization of support offered by VIIPS.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '25. Online Account, Dashboard & Access Policy',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Clients may be provided a secure login to their VIIPS dashboard to track progress, access documents, and raise support tickets.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>Any unauthorized access or data breach must be reported to our support team immediately.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '26. Governing Language',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>These Terms & Conditions are published in English. In case of translation into other languages, the English version shall prevail in the event of a conflict.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '27. Marketing, Emails & Communication Consent',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>By engaging with VIIPS, you agree to receive communication regarding service updates, offers, newsletters, and alerts via SMS, email, and WhatsApp.</li>
            <li>You may opt out of promotional communications at any time without affecting your access to essential service communications.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '28. Code of Conduct',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">All VIIPS clients, interns, institutional partners, and stakeholders are expected to maintain a professional code of conduct:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Disrespectful, abusive, or harassing behavior towards any team member, partner, or client is grounds for immediate termination of services.</li>
            <li>Ethical concerns or misconduct should be reported confidentially to our grievance redressal officer.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '29. Non-Compete & Conflict of Interest',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Clients engaged in strategy or confidential advisory services may be required to sign a non-compete clause to ensure mutual trust and protection of competitive interests.</li>
            <li>VIIPS reserves the right to decline services to any individual or entity where a direct conflict of interest is identified.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '30. Force Majeure',
      content: (
        <div className="text-gray-700">
          <p className="mb-2">VIIPS shall not be liable for delays, default, or failure in performance of services due to causes beyond our control, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Natural disasters, cyberattacks, strikes, pandemics, regulatory delays, or internet outages.</li>
            <li>A revised timeline will be shared in such situations, and clients may request updates via helpdesk channels.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '31. Data Storage, Backup & Retention Policy',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>All documents, applications, drafts, and client communications are stored on encrypted and access-controlled systems.</li>
            <li>Backups are maintained in accordance with industry standards to ensure continuity of services.</li>
            <li>VIIPS retains client files and records for a minimum of 3 years after the project closure, after which data may be archived or deleted securely, unless otherwise required by law.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '32. Trademark & Brand Representation',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>The VIIPS name, logo, and all proprietary product or program names (such as "Mera Startup Meri Pehchan", "Youth IPR Mission", etc.) are protected as brand assets.</li>
            <li>Unauthorized use, reproduction, or association of our brand or visual identity without written permission is prohibited and may attract legal action.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '33. Limitation of Liability',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS shall not be liable for any indirect, incidental, or consequential losses arising from the use of its services, including but not limited to lost profits, regulatory delays, or reputational damages.</li>
            <li>Our liability for direct damages, if proven, is limited to the amount paid for the service availed by the client.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '34. Whistleblower & Grievance Redressal Mechanism',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS encourages all stakeholders to report any ethical, legal, or procedural concerns in a confidential manner.</li>
            <li>Complaints may be sent to the designated email address mentioned on the website. All complaints are reviewed under our internal compliance framework and responded to within 10 working days.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '35. Gender Neutrality & Anti-Discrimination',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS maintains an inclusive work culture. All services, workshops, internships, and opportunities are provided without bias based on gender, caste, religion, nationality, age, or disability.</li>
            <li>Any discrimination or harassment encountered during interaction with VIIPS representatives should be reported immediately for prompt redressal.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '36. Research, Content Creation & Ownership',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Research reports, pitch decks, white papers, or educational content developed by VIIPS for clients remain the intellectual property of VIIPS unless a content transfer clause is mutually signed.</li>
            <li>Clients may request licensed use or full transfer of content rights through a separate agreement.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '37. Cybersecurity & Safe Communication',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Clients are advised to verify official email addresses ending in @vastavintellect.com or @vastavincubatex.com before sharing any sensitive data.</li>
            <li>VIIPS will never ask for passwords, OTPs, or unsolicited payment links via WhatsApp or social media. Any such attempt should be reported immediately.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '38. Audit & Compliance Readiness',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>VIIPS maintains standard operating procedures for compliance with regulatory audits (e.g., MSME audit, DPIIT inspections, startup policy assessments).</li>
            <li>Clients receiving government or CSR funds through VIIPS will be required to maintain project documentation and submit audit trails if demanded by funding agencies.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '39. Refunds for Institutional Events & Group Registrations',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Institutions booking bulk workshops or programs may request a refund only if cancellation is requested at least 10 days prior to the scheduled event date.</li>
            <li>Partial refunds may be applicable depending on pre-event design, planning, and training costs already incurred.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '40. Final Interpretation & Jurisdiction',
      content: (
        <div className="text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>These Terms & Conditions are governed under the laws of the Republic of India.</li>
            <li>In case of any legal dispute, the jurisdiction shall lie with the courts of Delhi NCR, India, unless specified otherwise under an institutional agreement.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '41. Contact Details',
      content: (
        <div className="text-gray-700">
          <p className="font-medium mb-2">Registered Office:</p>
          <p className="mb-4">
            Vastav Intellect IP Solutions LLP<br />
            A-61-C, Shivaji Enclave, Rajouri Garden<br />
            New Delhi – 110027, India
          </p>
          
          <p className="mb-4">
            <strong>Phone:</strong> +91-8448077010 / +91-9667576014<br />
            <strong>Email:</strong> info@vastavintellect.com<br />
            <strong>Support:</strong> support@vastavintellect.com<br />
            <strong>Helpdesk:</strong> helpdesk@vastavintellect.com
          </p>
          
          <p>
            <strong>Grievance Officer:</strong><br />
            Name: Tanisha Bharti<br />
            Email: tanisha_bharti@vastavintellect.com<br />
            Phone: +91-8448077010<br />
            Address: A-61-C, Shivaji Enclave, Rajouri Garden, New Delhi – 110027, India
                    </p>
                </div>
            ),
        },
  ]

  return (
    <div className="container mx-auto px-4 pt-6 md:px-6 lg:px-12 xl:px-24">
    <h1 className="text-4xl font-semibold mb-10 text-center">Terms and Conditions</h1>

    {sections.map((section, index) => (
      <div
        key={index}
        className="mb-6 border border-gray-300 rounded-lg shadow-sm transition-all duration-300"
      >
        <button
          onClick={() => toggleSection(index)}
          className={`w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium ${
            expandedSection === index ? 'bg-gray-100' : 'bg-white'
          } rounded-t-lg`}
        >
          <span>{section.title}</span>
          {expandedSection === index ? (
            <ChevronUp className="text-gray-600" />
          ) : (
            <ChevronDown className="text-gray-600" />
          )}
        </button>

        <AnimatePresence>
          {expandedSection === index && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-4 bg-gray-50 rounded-b-lg text-gray-700"
            >
              <p className="leading-relaxed">{section.content}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
  </div>
  );
};

export default TermsAndConditions;
