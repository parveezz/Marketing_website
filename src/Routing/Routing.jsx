import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";

// Core landing & service pages (zero framer-motion dependency, instant LCP)
import Home from "../Pages/Home";
import StrategicMarketing from "../Pages/services/StrategicMarketing";
import Branding from "../Pages/services/Branding";
import Advertising from "../Pages/services/Advertising";
import SocialMedia from "../Pages/services/SocialMedia";
import EventManagement from "../Pages/services/EventManagement";
import PublicRelations from "../Pages/services/PublicRelations";
import ConsultationServices from "../Pages/services/ConsultationServices";

// Secondary & interactive pages code-split with React.lazy
const About = lazy(() => import("../Pages/About"));
const Services = lazy(() => import("../Pages/services/Services"));
const Contact = lazy(() => import("../Pages/Contact"));
const PrivacyPolicy = lazy(() => import("../Pages/Footer/PrivacyPolicy"));
const TermsConditions = lazy(() => import("../Pages/Footer/TermsConditions"));
const CookiePolicy = lazy(() => import("../Pages/Footer/CookiePolicy"));
const Blog = lazy(() => import("../Pages/Blog"));
const BlogDetail = lazy(() => import("../Pages/BlogDetail"));
const CaseStudies = lazy(() => import("../Pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("../Pages/CaseStudyDetail"));
const Whitepapers = lazy(() => import("../Pages/Whitepapers"));
const Faq = lazy(() => import("../Pages/Faq"));
const OurWork = lazy(() => import("../Pages/Ourwork/ourWork"));
const ProjectDetail = lazy(() => import("../Pages/Ourwork/ProjectDetail"));
const IndustryDetail = lazy(() => import("../Pages/IndustryDetail"));
const Feedback = lazy(() => import("../Pages/Feedback"));
const NotFound = lazy(() => import("../Pages/NotFound"));

const Routing = () => {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-[#0a0a0a]" />}>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Main Pages */}
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="services" element={<Services />} />

          <Route path="our-work" element={<OurWork />} />
          <Route path="our-work/:id" element={<ProjectDetail />} />

          <Route path="contact" element={<Contact />} />

          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetail />} />

          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/:id" element={<CaseStudyDetail />} />

          <Route path="whitepapers" element={<Whitepapers />} />

          <Route path="faq" element={<Faq />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="client-feedback" element={<Feedback />} />

          {/* Legal Pages & Variations */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="privacy" element={<PrivacyPolicy />} />

          <Route path="terms" element={<TermsConditions />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="terms-conditions" element={<TermsConditions />} />

          <Route path="cookies" element={<CookiePolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />

          {/* Service Pages */}
          <Route
            path="services/strategic-marketing"
            element={<StrategicMarketing />}
          />

          <Route
            path="services/branding"
            element={<Branding />}
          />

          <Route
            path="services/advertising"
            element={<Advertising />}
          />

          <Route
            path="services/social-media"
            element={<SocialMedia />}
          />

          <Route
            path="services/event-management"
            element={<EventManagement />}
          />
          <Route
            path="services/events"
            element={<EventManagement />}
          />

          <Route
            path="services/public-relations"
            element={<PublicRelations />}
          />
          <Route
            path="services/pr"
            element={<PublicRelations />}
          />

          <Route
            path="services/consultation-services"
            element={<ConsultationServices />}
          />
          <Route
            path="services/consultation"
            element={<ConsultationServices />}
          />

          {/* Dynamic Industry Practice Routes */}
          <Route path="industries/:slug" element={<IndustryDetail />} />
          <Route path="industry/:slug" element={<IndustryDetail />} />

          {/* 404 Catch-All Page for Any Unmatched URL */}
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;