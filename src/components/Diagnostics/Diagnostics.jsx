import React, { useState } from 'react';
import './diagnostics.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DiagnosticReportPDF from './DiagnosticReportPDF';

const Diagnostics = () => {
  const [formData, setFormData] = useState({
    medicalHistory: '',
    symptoms: '',
    labResults: '',
  });

  const [file, setFile] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
    console.log('Uploaded File:', file);
  };

  return (
    <div className="diagnostic-container">
      <h2>Diagnostic Request Page</h2>
      <form onSubmit={handleSubmit}>
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
          document={<DiagnosticReportPDF data={formData} />}
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
