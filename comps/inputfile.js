import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Image from 'next/image'

// local imports 
import styles from '../styles/inputfile.module.css'





//component for input files to session data - the props will be used as the name for the session data
const InputFile = (props) => {

    



    const [uploadState, setUploadState] = useState(false)
    const [uploadMessage, setUploadMessage] = useState("Drag 'n' Drop some files here, or click to select files")
    const [uploadColour, setUploadColour] = useState("default")
    var uploadPageState = false
    if (props.pageName == "assesment"){
        console.log("pagename assesment")
        uploadPageState = true
    }

    console.log(uploadState)
  
    const onDrop = useCallback( (acceptedFiles) =>{
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            //check if file is .json
            if(file.path.split('.').pop()=='json' ){
            
                
                reader.onabort = () => console.warn('File Reading was aborted')
                reader.onerror = () => console.warn('file reading has failed')
                reader.onload = () => {
                    const results = reader.result
                    sessionStorage.setItem(props.fileName,results) 
                   // console.log("testing FILENAME" + props.fileName)
                    
                    location.reload()
                      //  console.log("testing FILENAME")
                         
                    setUploadState(true)
                   // console.log(uploadState)

                   

                }
                reader.readAsText(file)
            }else{
                console.warn("File wasnt an JSON")
                setUploadMessage("The file(s) you have uploaded aren't in JSON format. Please use only JSON collected from this tool")
                setUploadColour("red")
            } 
        });
        
    },[],

    )

    const {getRootProps, getInputProps} = useDropzone({onDrop})
    return (
        <>
        <div {...getRootProps()} className = {uploadPageState? styles.pageNav:styles.uploadfile}>
          <input {...getInputProps()} />
          <p className="middle" style={{uploadColour,fontSize: "20px"}} >{uploadMessage}</p>
          <div className = "middle">
             <Image src = {uploadState? "/uploadSuccessful.png":"/dragndrop.png"} width={75} height = {75} className="middle"/>
            
          </div>

        </div>
    
        </>
      );
}
 
export default InputFile;