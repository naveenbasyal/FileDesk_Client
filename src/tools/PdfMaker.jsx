import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake"; 


pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfGenerator = () => {
  const [text, setText] = useState("");

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleGenerate = () => {
    const content = htmlToPdfmake(text);

    const docDefinition = {
      content,
    };

    const pdfDocGenerator = pdfMake.createPdf(docDefinition);

    pdfDocGenerator.getDataUrl((dataUrl) => {
      const iframe = document.getElementById("pdf-preview");
      iframe.src = dataUrl;
    });
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [
        "bold",
        "italic",
        "underline",
        "strike",
        { color: [] },
        { background: [] },
      ],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ font: [] }],
      [{ align: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ size: ["small", false, "large", "huge"] }],
      ["pre", "blockquote", "code-block"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "font",
    "align",
    "script",
    "size",
    "pre",
    "blockquote",
    "code-block",
    "strike-through",
  ];

  return (
    <div className="container pop my-5">
      <h2 className="text-center stroke p-1 ls-2">
        Create / Write your own Pdf
      </h2>
      <ReactQuill
        value={text}
        onChange={handleTextChange}
        modules={modules}
        formats={formats}
        style={{ height: "20rem" }}
      />
      <br />
      <br />
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="shadow-out shadow-btn dim fw-bold  my-5"
        onClick={handleGenerate}
        disabled={!text}
      >
        Preview
      </motion.button>
      <br />
      <br />
      <iframe
        id="pdf-preview"
        width="100%"
        height="500px"
        title="PDF Preview"
      />
    </div>
  );
};
//
export default PdfGenerator;
