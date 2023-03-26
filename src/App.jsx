import React, { lazy, Suspense, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Delivery = lazy(() => import("./Pages/Delivery"));
const Tools = lazy(() => import("./Pages/Tools"));
const Auth = lazy(() => import("./Pages/Auth"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Shop = lazy(() => import("./Pages/Shop"));
const Orders = lazy(() => import("./Pages/Orders"));
const Reset = lazy(() => import("./Pages/Reset"));
const VerifyEmail = lazy(() => import("./Pages/VerifyEmail"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword"));

const Merge = lazy(() => import("./tools/Merge"));
const Img2Pdf = lazy(() => import("./tools/Img2Pdf"));
const ExtractPages = lazy(() => import("./tools/ExtractPages"));
const RemovePages = lazy(() => import("./tools/RemovePages"));
const PdfMaker = lazy(() => import("./tools/PdfMaker"));
const DocToPdf = lazy(() => import("./tools/DocToPdf"));
const ConvertToZip = lazy(() => import("./tools/ConvertToZip"));
const MoonLoader = lazy(() => import("react-spinners/MoonLoader"));

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
      <Router>
        <Toaster />
        <Navbar scrollToTop={scrollToTop} />
        {/* ____scrollbar____ */}
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div>
          <Suspense
            fallback={
              <div className="dim lazyLoader center">
                <h2>Loading...</h2>
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={<Delivery scrollToTop={scrollToTop} />}
              />
              <Route
                path="/tools"
                element={<Tools scrollToTop={scrollToTop} />}
              />
              <Route path="/tools/merge" element={<Merge />} />
              <Route path="/tools/image-to-pdf" element={<Img2Pdf />} />
              <Route path="/tools/extract-pages" element={<ExtractPages />} />
              <Route path="/tools/remove-pages" element={<RemovePages />} />
              <Route path="/tools/create-pdf" element={<PdfMaker />} />
              <Route path="/tools/doc-to-pdf" element={<DocToPdf />} />
              <Route path="/tools/convert-zip" element={<ConvertToZip />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/shop" element={<Shop />} />
              <Route path="/dashboard/orders" element={<Orders />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/resetpassword/:token" element={<Reset />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/verifyemail/:token" element={<VerifyEmail />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
};

export default App;
