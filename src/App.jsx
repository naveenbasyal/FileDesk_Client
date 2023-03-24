import React, { useContext, useEffect } from "react";
import DotRing from "./CustomMouse/DotRing/DotRing";
import { motion, useScroll } from "framer-motion";
import Delivery from "./Pages/Delivery";
import Merge from "./tools/Merge";
import Img2Pdf from "./tools/Img2Pdf";
import ExtractPages from "./tools/ExtractPages";
import RemovePages from "./tools/RemovePages";
import PdfMaker from "./tools/PdfMaker";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Tools from "./Pages/Tools";
import Auth from "./Pages/Auth";
import { Toaster } from "react-hot-toast";
import DocToPdf from "./tools/DocToPdf";
import ConvertToZip from "./tools/ConvertToZip";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyEmail from "./Pages/VerifyEmail";
import Shop from "./Pages/Shop";
import Orders from "./Pages/Orders";
import Reset from "./Pages/Reset";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const App = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {}, [localStorage]);
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar scrollToTop={scrollToTop} />
        {/* ____scrollbar____ */}
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        {/* __Cursor__ */}
        {/* <DotRing /> */}
        <div>
          <Routes>
            <Route path="/" element={<Delivery scrollToTop={scrollToTop} />} />
            <Route
              path="/tools"
              element={<Tools scrollToTop={scrollToTop} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/tools/merge" element={<Merge />} />
            <Route path="/tools/image-to-pdf" element={<Img2Pdf />} />
            <Route path="/tools/extract-pages" element={<ExtractPages />} />
            <Route path="/tools/remove-pages" element={<RemovePages />} />
            <Route path="/tools/create-pdf" element={<PdfMaker />} />
            <Route path="/tools/doc-to-pdf" element={<DocToPdf />} />
            <Route path="/tools/convert-zip" element={<ConvertToZip />} />
            <Route path="/dashboard/shop" element={<Shop />} />
            <Route path="/dashboard/orders" element={<Orders />} />
            <Route path="/resetpassword/:token" element={<Reset />} />

            <Route path="/auth" element={<Auth />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/verifyemail/:token" element={<VerifyEmail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
