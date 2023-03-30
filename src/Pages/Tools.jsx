import React,{useEffect} from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ToolsHeader from "../components/ToolsHeader";
import Footer from "../components/Footer";

const Tools = ({ scrollToTop }) => {
  useEffect(() => {
    document.title = "FileDesk | Tools";
  }, [])
  
  const tools = [
    {
      id: 1,
      name: "Merge PDF",
      description: "Merge multiple PDF files into one PDF file",
      icon: "fa-code-merge",
      link: "/tools/merge",
    },
    {
      id: 2,
      name: "Image to Pdf",
      description: "Convert Images to PDF",
      icon: "fa-file-image",
      link: "/tools/image-to-pdf",
    },
    {
      id: 3,
      name: "Extract Pages",
      description: "Extract pages from PDF",
      icon: "fa-file-export",
      link: "/tools/extract-pages",
    },
    {
      id: 4,
      name: "Remove Pages",
      description: "Remove pages from PDF",
      icon: "fa-file-circle-minus",
      link: "/tools/remove-pages",
    },
    {
      id: 5,
      name: "Rotate Pages",
      description: "Rotate pages in PDF",
      icon: "fa-rotate",
      link: "/tools/rotate-pages",
    },
    {
      id: 6,
      name: "Doc to Pdf",
      description: "Convert Doc to PDF",
      icon: "fa-file-word",
      link: "/tools/doc-to-pdf",
    },
    {
      id: 7,
      name: "Create Pdf",
      description: "Create PDF from Text",
      icon: "fa-file-pdf",
      link: "/tools/create-pdf",
    },
    {
      id: 8,
      name: "Convert to Zip ",
      description: "Convert PDF to Zip file",
      icon: "fa-file-pdf",
      link: "/tools/convert-zip",
    },
  ];

  return (
    <div className="container my-5">
      {/* ---------Tools Header------- */}
      <ToolsHeader />

      {/* ___________Main -- Tools ______________ */}

      <div className="row my-5 pop container">
        <div className="col-12">
          <div className="row">
            {tools.map((tool) => (
              // __________Tools_Card____________
              <div className="col-lg-4 my-1 col-md-6 card_tools col-sm-12" key={tool.id}>
                <Link to={tool.link} className=" shadow-out">
                  <motion.div
                    onClick={scrollToTop}
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 ,bounce:.2,type:"tween"}}
                    style={{ height: "10rem" }}
                    
                    whileHover={{ scale: 1.1 }}
                    className="card  m-2 bg-color border-none pointer shadow-out"
                  >
                    <div className="card-body py-4">
                      <div className="card-title fs-5 dim">
                        <i
                          className={`fas ${tool.icon} fa-sharp stroke p-1 fa-2x`}
                        ></i>
                        &nbsp; {tool.name}
                      </div>
                      <p className="card-text px-3 text-secondary">
                        {tool.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default Tools;
