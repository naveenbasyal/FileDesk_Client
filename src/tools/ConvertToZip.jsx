import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import {Link} from 'react-router-dom'
const ConvertToZip = () => {
    const [file, setFile] = useState({})
    const [zip, setZip] = useState('')

    const convert = async () => { 
        const formData = new FormData()
        formData.append('file', file)
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/file/zip`, {
            method: 'POST',
            headers:{
                'Secret-Key': `${process.env.REACT_APP_SECRET_KEY}`

            },
            body: formData
        })
        const data = await res.json()

        if (data.error) {
            toast.error(data.error)
            return
        }
        console.log(data)
        setZip(
            `${process.env.REACT_APP_SERVER_URL}/${data.path}`
        )
    }
    console.log(zip)

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
                    Convert any file to zip file
                </h1>
                
                {
                    zip ? (
                        <div className="d-flex my-5 justify-content-around center">
                            <h3 className="stroke ls-2 mx-4 center">
                                Download zip
                            </h3>
                            <motion.a
                                href={zip}
                                download={zip}
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
                                Upload File
                                <input
                                    type="file"
                                    className="form-control"
                                    id="remove-pages"
                                    accept=".doc
                            ,.docx
                            ,.word
                            ,.pdf
                            ,.jpg
                            ,.jpeg
                            ,.png
                
                            ,.txt
                            
                            ,.xls

                            
                            "
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

export default ConvertToZip