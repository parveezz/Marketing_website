import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/services/Services";
import Contact from "../Pages/Contact";

import PrivacyPolicy from "../Pages/Footer/PrivacyPolicy";
import TermsConditions from "../Pages/Footer/TermsConditions";
import CookiePolicy from "../Pages/Footer/CookiePolicy";

import StrategicMarketing from "../Pages/services/StrategicMarketing";
import Branding from "../Pages/services/Branding";
import Advertising from "../Pages/services/Advertising";
import SocialMedia from "../Pages/services/SocialMedia";
import Careers from "../Pages/Careers";
import Press from "../Pages/Press";
import Blog from "../Pages/Blog";
import CaseStudies from "../Pages/CaseStudies";
import Whitepapers from "../Pages/Whitepapers";
import Faq from "../Pages/Faq";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Main Pages */}
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="services" element={<Services />} />

        <Route path="contact" element={<Contact />} />

        <Route path="careers" element={<Careers />} />

        <Route path="press" element={<Press />} />

        <Route path="blog" element={<Blog />} />

        <Route path="case-studies" element={<CaseStudies />} />

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
  );
};

export default Routing;