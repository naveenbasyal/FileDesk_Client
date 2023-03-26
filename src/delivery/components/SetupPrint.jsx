
import React,{useState} from "react";
// import { SiPowerpages } from 'react-icons/si'
// import { FaFilePdf } from 'react-icons/fa'
// import { AiOutlineFileAdd } from 'react-icons/ai'
// import { BsFillFileFill } from 'react-icons/bs'
const SetupPrint = () => {
  // const [page, setPage] = React.useState('single')
  const [singleSide, setSingleSide] = useState(true);
  const [bothside, setBothSide] = useState(false);

  const handleSingleChange = () => {
    setSingleSide(true);
    setBothSide(false);
  };
  const handleBothChange = () => {
    setSingleSide(false);
    setBothSide(true);
  };
  return (
    <>
      <div className="d-flex my-3 setup row">
        <div className="col-lg-3">
          <span className="fw-bold mx-4">Sides:</span>
        </div>
        <div className="col-lg-9 d-flex optionIcon">
          <div className="col-lg-5 ">
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                
                checked={singleSide}
                onChange={handleSingleChange}
                id="ss"
              />
              <label className="form-check-label" >
                Single Side
              </label>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="form-check mx-3">
              <input
                checked={bothside}
                onChange={handleBothChange}
                className="form-check-input"
                type="checkbox"
                value=""
                id="bs"
              />
              <label className="form-check-label" >
                Both Side
              </label>
            </div>
          </div>
          {/* <div className={
           `pageBox mx-4 col-lg-5 ${page === 'single' ? " active" : null}`
          }
            title="Single Side"
            onClick={() => setPage('single')}
          >
            <BsFillFileFill />
          </div>
          <div 
            className={`col-lg-5 mx-4 pageBox ${page === 'both' ? " active" : null}`}
            title="Both Side"
            onClick={() => setPage('both')}
          >
            <SiPowerpages />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SetupPrint;
