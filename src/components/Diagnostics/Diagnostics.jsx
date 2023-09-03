import React, { useState } from 'react';
import './diagnostics.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DiagnosticReportPDF from './DiagnosticReportPDF';
import axios from 'axios';

const Diagnostics = () => {
  const [formData, setFormData] = useState({
    information: '',
    medicalHistory: '',
    symptoms: '',
    labResults: '',
  });
  const [report, setReport] = useState('');

  const [file, setFile] = useState(null);
  const [chatResponse, setChatResponse] = useState('');
  const base_url = "https://api.openai.com/v1/";
  const openai_token = "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";

  const openai_header = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${openai_token}`
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      "model": "gpt-3.5-turbo",
      "messages":[
        {
          "role":"user",
          "content":`I currently have medical data of an individual and I would like you to write me a report of this patient with these characteristics: ${formData}`
        }
      ]
    };

    try {
      const response = await axios.post(`${base_url}/chat/completions`,data, {
        headers: openai_header
      });
      const response_text = response.data.choices[0].message.content;
      setReport(response_text);
      console.log(response_text);
    
      
    }
    catch(error) {
      console.log(error);
    }

    // console.log('Form Data:', formData);
    // console.log('Uploaded File:', file);
  };

  return (
    <div className="diagnostic-container">
      <h2>Diagnostic Request Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="medicalHistory">Informations of Patient:</label>
          <textarea
            name="information"
            id="information"
            rows="4"
            value={formData.information}
            onChange={handleChange}
            placeholder="Enter your name, age, weight, and somes informations about you"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="medicalHistory">Medical History:</label>
          <textarea
            name="medicalHistory"
            id="medicalHistory"
            rows="4"
            value={formData.medicalHistory}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="symptoms">Symptoms:</label>
          <textarea
            name="symptoms"
            id="symptoms"
            rows="4"
            value={formData.symptoms}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="labResults">Lab Results (Optional):</label>
          <textarea
            name="labResults"
            id="labResults"
            rows="4"
            value={formData.labResults}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload Medical Documents (Optional):</label>
          <input
            type="file"
            name="file"
            id="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>

      <div className="diagnostic-results">
        <h2>Diagnostic Report Results</h2>
        <p>Here is your diagnostic report:</p>
        <DiagnosticReportPDF data={formData} />
        <PDFDownloadLink
          document={<DiagnosticReportPDF data={formData} report={report} />}
          fileName="Malkia_diagnostic_report.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Diagnostics;
