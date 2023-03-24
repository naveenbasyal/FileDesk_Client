import PDFMerger from "pdf-merger-js/browser";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Merger = () => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState();
  const [files, setFiles] = useState([]);
  const [error, seterror] = useState("");

  const handleFileInputChange = (event) => {
    setFiles(event.target.files);
    if (files.length < 2) {
      seterror("Please select more than 1 files !!");
      return;
    }
  };

  const handleMergeButtonClick = async () => {
    const merger = new PDFMerger();

    for (const file of files) {
      await merger.add(file);
    }

    const mergedPdf = await merger.saveAsBlob();
    const url = URL.createObjectURL(mergedPdf);

    setMergedPdfUrl(url);
  };

  return (
    <div className="container pop my-5 row center">
      <div className="col-lg-7 col-md-10 col-sm-12 my-4">
        <h2 className="stroke ls-2 my-2 center">
          Merge Multiple Pdfs into One!!
        </h2>
        <div className="d-flex justify-content-around center ">
          <div className="dim fs-5 fw-bold">Total Files : {files.length}</div>
          <motion.label
            whileHover={{ scale: 1.05 }}
            htmlFor="mergePdf"
            className="u-f-b my-3"
          >
            {files.length === 0 || files.length === 1
              ? "Upload Files"
              : "Upload More?"}
            <input
              className="form-control"
              type="file"
              id="mergePdf"
              onChange={handleFileInputChange}
              multiple
            />
          </motion.label>
        </div>
        <div className="text-danger fs-5">{files.length < 2 ? error : ""}</div>

        <div className="container m-5">
          {files.length > 1 ? (
            <button
              className="shadow-btn dim fs-5  shadow-out"
              onClick={handleMergeButtonClick}
            >
              Merge
            </button>
          ) : null}
        </div>
      </div>
      <div className="center row">
        <div className="col-lg-8 col-md-10 col-sm-12 container">
          <iframe
            height={1000}
            src={`${mergedPdfUrl ? mergedPdfUrl : ""}`}
            title="pdf-viewer"
            width="100%"
            id="pdf-preview"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Merger;
