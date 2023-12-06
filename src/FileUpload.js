// FileUpload.js
import React, { useState } from 'react';

const FileUpload = ({ triggerNextStep }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Trigger the upload logic when a file is selected
    if (selectedFile) {
      handleUpload();
    }
  };

  const handleUpload = () => {
    // Perform any necessary logic with the uploaded file
    console.log('File uploaded:', file);

    // Trigger the next step in the chatbot flow
    triggerNextStep();
  };

  return (
    <div style={{ color: 'black' }}>
      <input type="file" onChange={handleFileChange} />
    
  
    </div>
  );
};

export default FileUpload;

