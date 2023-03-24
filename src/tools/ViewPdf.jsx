import React, { useState } from "react";

import { Viewer } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";    

export const ViewPdf = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <div className="container my-3">
      <br></br>

      <form className="form-group" onSubmit={handlePdfFileSubmit}>
        <h2>View PDF</h2>
        <input
          type="file"
          className="form-control"
          required
          onChange={handlePdfFileChange}
        />
        {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
        <br></br>
        {!viewPdf && <>No pdf file selected</>}<br/>
        <button type="submit" className="btn btn-success my-3">
          UPLOAD
        </button>
      </form>
      <br></br>
      <div className="pdf-container">
        {viewPdf && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
              <Viewer
                fileUrl={viewPdf}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </>
        )}

        {/* if we dont have pdf */}
      </div>
    </div>
  );
};

export default ViewPdf;
