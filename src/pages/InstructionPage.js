import React from 'react';
import { Button } from '@cmsgov/design-system';
import { useNavigate } from 'react-router-dom';
import '../styles/instructionPage.css';

const InstructionPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Administrative Simplification Enforcement and Testing Tool (ASETT)</h3>

      <p className='disclaimer'>
        Disclaimer: If you file a complaint without registration, you will not be able to view your complaints,upload supporting documents, correspond electronically, or test transactions.
      </p>

      <p>
        The following is the list of steps you will take in order to file a complaint regarding HIPAA Transactions
        and Code Sets, Unique Identifiers, and/or Operating Rules. If you wish to file a Health Insurance Privacy
        complaint, please visit the <a href="https://www.hhs.gov/ocr" target="_blank" rel="noopener noreferrer">Office for Civil Rights (OCR)</a> website.
      </p>

      <div>
        <p>Step 1: Identify the type of HIPAA/ACA complaint</p>
        <p>Step 2: Provide your contact information</p>
        <p>Step 3: Identify the Filed Against Entity</p>
        <p>Step 4: Describe the HIPAA/ACA violation</p>
        <p>Step 5: Review and Submit</p>
      </div>

      <p>
        You can review all information entered before submitting your complaint to CMS. Once the complaint is
        submitted, CMS will review all information and respond to your complaint.
      </p>

      <p>Click the Complaint Type button below to begin filing your complaint</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button
          className="nav-button"
          onClick={() => window.history.back()}
        >
          Cancel
        </Button>
        <Button
          className="nav-button"
          onClick={() => navigate('/complaint-type')}
        >
          Complaint Type{'>'}
        </Button>
      </div>
    </>
  );
};

export default InstructionPage; 