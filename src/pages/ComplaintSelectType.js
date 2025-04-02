import React, { useState } from 'react';
import { Button, Choice } from '@cmsgov/design-system';
import { useNavigate } from 'react-router-dom';
import '../styles/ProgressBar.css';

const ComplaintSelectType = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedType) {
      alert('Please select a complaint type');
      return;
    }
    navigate('/complainant-details');
  };

  return (
    <div className="container">
      <p className="content-disclaimer">Form Approved OMB No. 0938-0948</p>
      <div className="progress-bar">
        <div className="step active">Complaint Type</div>
        <div className="step">Complainant Details</div>
        <div className="step">FAE Details</div>
        <div className="step">Complaint Details</div>
        <div className="step">Review Complaint</div>
        <div className="step">Submitted</div>
      </div>

      <div className="content">
        <h1 className="title">Complaint Type</h1>
        <p className="title">Make a selection below</p>

        <form onSubmit={handleSubmit}>
          <Choice
            type="radio"
            name="complaintType"
            value="transactions"
            checked={selectedType === 'transactions'}
            onChange={(e) => setSelectedType(e.target.value)}
            label="Transactions"
            hint="Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of
benefits and premium payment."
          />
          <Choice
            type="radio"
            name="complaintType"
            value="codeSets"
            checked={selectedType === 'codeSets'}
            onChange={(e) => setSelectedType(e.target.value)}
            label="Code Sets"
            hint="Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs."
          />
          <Choice
            type="radio"
            name="complaintType"
            value="uniqueIdentifiers"
            checked={selectedType === 'uniqueIdentifiers'}
            onChange={(e) => setSelectedType(e.target.value)}
            label="Unique Identifiers"
            hint="Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN)"
          />
          <Choice
            type="radio"
            name="complaintType"
            value="operatingRules"
            checked={selectedType === 'operatingRules'}
            onChange={(e) => setSelectedType(e.target.value)}
            label="Operating Rules"
            hint="Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan."
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button
              className="nav-button"
              style={{ color: 'white' }}
              onClick={() => window.history.back()}
            >
              {'<'} Welcome
            </Button>
            <Button
              className="nav-button"
              style={{ color: 'white' }}

              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button
              style={{ color: 'white' }}
              className="nav-button"
              type="submit"
            >
              Complaint Information{'>'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintSelectType;

