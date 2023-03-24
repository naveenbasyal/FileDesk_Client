import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
const DocToPdf = () => {
    const [file, setFile] = useState({})
    const [pdf, setPdf] = useState('')

    const convert = async () => {
        const formData = new FormData()
        formData.append('file', file)
        const res = await fetch('http://localhost:5000/file/doctopdf', {
            method: 'POST',
            body: formData
        })
        const data = await res.json()

        if (data.error) {
            toast.error(data.error)
            return
        }
        console.log(data)
        setPdf(
            `${process.env.REACT_APP_SERVER_URL}/${data.path}`
        )
    }
    console.log(pdf)

    useEffect(() => {
        if (file?.name) {
            convert()
        }
    }, [file])
    console.log(file)




    return (
        <div className="container center my-5 pop">
            <div className="col-lg-8 col-md-10 col-sm-12">
                <h1 className="stroke ls-2 mx-4 center">
                    Convert Word to PDF
                </h1>
                {
                    pdf ? (
                        <div className="d-flex my-5 justify-content-around center">
                            <h3 className="stroke ls-2 mx-4 center">
                                Download PDF
                            </h3>
                            <motion.a
                                href={pdf}
                                download={pdf}
                                className="u-f-b"
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.5 }
                                }}
                                whileTap={{
                                    scale: 0.9,
                                    transition: { duration: 0.5 }
                                }}


                            >
                                Download
                            </motion.a>
                        </div>
                    ) : (
                        <div className="d-flex my-5 justify-content-around center">
                            <label htmlFor="remove-pages" className="u-f-b">
                                Upload Word File
                                <input
                                    type="file"
                                    className="form-control"
                                    id="remove-pages"
                                    accept=".doc
                            ,.docx
                            ,.word"
                                    onChange={(e) => {
                                        setFile(e.target.files[0])
                                    }}
                                />
                            </label>
                        </div>
                    )

                }
            </div>




        </div>
    )
}

export default DocToPdf