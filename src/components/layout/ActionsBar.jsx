import React from 'react'

export const ActionsBar = ({ onFileChange, onPreview, onUpload, fileName, isDisabled }) => (
  <div className="form-group" style={{ display: "flex", justifyContent: "space-arround", gap: "10px" }}>
    <div style={{flex: "1"}}>
      <label className="custom-file-upload">
        <input type="file" accept="image/*,application/pdf" onChange={onFileChange} style={{ display: "none" }} />
        Seleccionar archivo
      </label>
      <span id="fileName">{fileName}</span>
    </div>
    <div style={{flex: "1"}}>
      <button id="previewButton" onClick={onPreview} disabled={isDisabled}>Previsualizar</button>
      <button id="uploadButton" onClick={onUpload} disabled={isDisabled}>Subir</button>
    </div>
  </div>
);