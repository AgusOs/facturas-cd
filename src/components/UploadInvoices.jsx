import { useState } from "react";

import { ActionsBar } from './layout/ActionsBar'
import { FilePreview } from './layout/FilePreview'
import { JsonResponse } from './layout/JsonResponse'

import { uploadFileService } from "../services/uploadFileService";

const UploadInvoices = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("Ningún archivo seleccionado");
    const [preview, setPreview] = useState(null);
    const [jsonResponse, setJsonResponse] = useState(null);
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        setFileName(selectedFile.name);
      }
    };
  
    const handleFilePreview = () => {
      if (file) {
        const fileURL = URL.createObjectURL(file);
        if (file.type.startsWith("image")) {
          setPreview(<img src={fileURL} alt="Preview" width="100%"/>);
        } else if (file.type === "application/pdf") {
          setPreview(<iframe src={fileURL} width="100%" height="700px" title="PDF Preview"></iframe>);
        } else {
          alert("Archivo invalido\nSelecione una imagen .jpg o un PDF")
        }
      }
    };
  
    const handleUpload = async () => {
      if (!file) return;
      try {
        const response = await uploadFileService(file);
        setJsonResponse(JSON.stringify(response, null, 2));
      } catch (error) {
        setJsonResponse("Error al subir archivo");
      }
    };
  
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: 20, fontSize: 34 }}>Carga de facturas</h1>
        <ActionsBar onFileChange={handleFileChange} onPreview={handleFilePreview} onUpload={handleUpload} fileName={fileName} isDisabled={!file} />
        <div className="container" style={{ marginTop: 20 }}>
          <FilePreview preview={preview} />
          <JsonResponse jsonResponse={jsonResponse} />
        </div>
      </div>
    );
  };
  
export default UploadInvoices;