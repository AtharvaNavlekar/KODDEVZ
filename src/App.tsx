/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ClientPortal } from "./pages/ClientPortal";
import { Prebuilt } from "./pages/Prebuilt";
import { Customized } from "./pages/Customized";
import { AboutUs } from "./pages/AboutUs";
import { ContactPage } from "./pages/ContactPage";
import { Blogs } from "./pages/Blogs";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { RefundPolicy } from "./pages/RefundPolicy";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal" element={<ClientPortal />} />
        <Route path="/prebuilt" element={<Prebuilt />} />
        <Route path="/customized" element={<Customized />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}
