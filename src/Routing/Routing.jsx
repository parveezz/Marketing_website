import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";

// Core landing & service pages (zero framer-motion dependency, instant LCP)
import Home from "../Pages/Home";
import StrategicMarketing from "../Pages/services/StrategicMarketing";
import Branding from "../Pages/services/Branding";
import Advertising from "../Pages/services/Advertising";
import SocialMedia from "../Pages/services/SocialMedia";

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

          {/* Legal Pages */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />

          <Route path="terms" element={<TermsConditions />} />

          <Route path="cookies" element={<CookiePolicy />} />

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

        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;