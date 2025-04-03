import React, { useState } from 'react';
import { Button, TextField, Choice, Dropdown } from '@cmsgov/design-system';
import { useNavigate } from 'react-router-dom';

const ComplainantDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    isAnonymous: '',
    organizationName: '',
    organizationType: '',
    organizationTypeOther: '',
    organizationRole: '',
    organizationPhone: '',
    title: '',
    firstName: '',
    middleInitial: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    zipExt: '',
    email: '',
    contactPhone: '',
    contactPhoneExt: '',
    cellPhone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/fae-details');
  };

  // Progress bar steps
  // const steps = [
  //   { name: 'Complaint Type', status: 'completed' },
  //   { name: 'Complainant Details', status: 'current' },
  //   { name: 'FAE Details', status: 'upcoming' },
  //   { name: 'Complaint Details', status: 'upcoming' },
  //   { name: 'Review Complaint', status: 'upcoming' },
  //   { name: 'Submitted', status: 'upcoming' }
  // ];

  return (
    <div className="ds-l-container">
      <p className="content-disclaimer">Form Approved OMB No. 0938-0948</p>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="step active" style={{ backgroundColor: "green" }}>Complaint Type</div>
        <div className="step active" >Complainant Details</div>
        <div className="step">FAE Details</div>
        <div className="step">Complaint Details</div>
        <div className="step">Review Complaint</div>
        <div className="step">Submitted</div>
      </div>

      <div className="ds-u-margin-top--3">


        <h1 className="ds-h2">Complainant Details</h1>

        <div className="ds-u-margin-top--2 ds-u-padding--3 ds-u-border--1 ds-u-radius ds-u-fill--gray-lightest">
          <fieldset className="ds-u-margin-top--0 " style={{ display: "flex", gap: "20px" }}>
            <p className='bold-text'>Do you want to remain anonymous during this process?*</p>
            <div className="ds-u-display--flex ds-u-align-items--center">
              <Choice
                type="radio"
                name="isAnonymous"
                value="yes"
                checked={formData.isAnonymous === 'yes'}
                onChange={handleChange}
                label="Yes"
                className="ds-u-margin-right--2"
              />
              <Choice
                type="radio"
                name="isAnonymous"
                value="no"
                checked={formData.isAnonymous === 'no'}
                onChange={handleChange}
                label="No"
              />
            </div>

          </fieldset>

          <div className="ds-u-margin-top--2 ds-u-font-size--small">
            <p className="ds-u-font-weight--bold">Disclaimer:</p>
            <p className="ds-u-margin-y--1 margin-right-txt">
              If you select yes, CMS will not share your information with the Filed Against
              Entity (FAE) during the investigation process. However, information provided in this
              complaint is subject to rules and policies under the Freedom of Information Act (FOIA).
            </p>
          </div>
        </div>


        <form onSubmit={handleSubmit} className="ds-c-form ds-u-margin-top--3 " >
          <div className="form-field bold-text">
            <label htmlFor="organizationName" className="form-label ml-10">
              Complainant Organization Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-field ds-u-fill--gray-lightest bold-text">
            <label htmlFor="organizationType" className="form-label ml-10">
              Complainant Organization Type
            </label>
            <input
              type="text"
              id="organizationType"
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              required
              placeholder='--None--'
              className="form-input"
            />

          </div>

          <div className="form-field bold-text">
            <label htmlFor="organizationTypeOther" className="form-label ml-10">
              Complainant Organization Type (Other)
            </label>
            <TextField
              label=""
              name="organizationTypeOther"
              value={formData.organizationTypeOther}
              onChange={handleChange}
            />
          </div>

          <div className="form-field ds-u-fill--gray-lightest bold-text">
            <label htmlFor="organizationRole" className="form-label ml-10">
              Complainant Organization Role
            </label>
            <TextField
              label=""
              name="organizationRole"
              value={formData.organizationRole}
              onChange={handleChange}
            />
          </div>

          <div className="form-field bold-text">
            <label htmlFor="organizationPhone" className="form-label ml-10">
              Complainant Organization Phone Number<span className="required">*</span>
            </label>
            <TextField
              label=""
              name="organizationPhone"
              value={formData.organizationPhone}
              onChange={handleChange}
              placeholder="(***) ***-****"
              required
            />
          </div>

          <div className="form-field ds-u-fill--gray-lightest bold-text">
            <label htmlFor="title" className="form-label ml-10">
              Complainant Title<span className="required">*</span>
            </label>

            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="form-input"
              placeholder='--None--'
            />

          </div>

          <div className="form-field bold-text">
            <label htmlFor="firstName" className="form-label ml-10">
              Complainant First Name<span className="required">*</span>
            </label>
            <TextField
              label=""
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field ds-u-fill--gray-lightest bold-text">
            <label htmlFor="middleInitial" className="form-label ml-10">
              Complainant MI
            </label>
            <TextField
              label=""
              name="middleInitial"
              value={formData.middleInitial}
              onChange={handleChange}
            />
          </div>

          <div className="form-field bold-text">
            <label htmlFor="lastName" className="form-label ml-10">
              Complainant Last Name<span className="required">*</span>
            </label>
            <TextField
              label=""
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field bold-text ds-u-fill--gray-lightest">
            <label htmlFor="addressLine1" className="form-label ml-10">
              Complainant Address Line 1<span className="required">*</span>
            </label>
            <TextField
              label=""
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field bold-text">
            <label htmlFor="addressLine2" className="form-label ml-10">
              Complainant Address Line 2
            </label>
            <TextField
              label=""
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </div>

          <div className="form-field ds-u-fill--gray-lightest bold-text">
            <label htmlFor="city" className="form-label ml-10">
              Complainant City/Town<span className="required">*</span>
            </label>
            <TextField
              label=""
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field bold-text">
            <label htmlFor="state" className="form-label ml-10">
              Complainant State/Territory<span className="required">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder='--None--'
              className="form-input"
            />

          </div>

          <div className="form-field ds-u-fill--gray-lightest bold-text">
            <label htmlFor="zipCode" className="form-label ml-10">
              Complainant Zip Code<span className="required">*</span>
            </label>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <TextField
                label=""
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="55555"
                required
                style={{ width: '130px' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
             
                <TextField
                  label=""
                  name="zipExt"
                  value={formData.zipExt}
                  onChange={handleChange}
                  placeholder='Ext'
                  style={{ width: '80px' }}
                />
              </div>
            </div>
          </div>



          <div className="form-field  bold-text">
            <label htmlFor="email" className="form-label ml-10">
              Complainant Email Address<span className="required">*</span>
            </label>
            <TextField
              label=""
              name="email"
              type="email"
              value={formData.email}
              placeholder="example@demo.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field bold-text ds-u-fill--gray-lightest">
            <label htmlFor="contactPhone" className="form-label ml-10">
              Complainant Contact Phone Number<span className="required">*</span>
            </label>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <TextField
                label=""
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                placeholder="(***) ***-****"
                required
                style={{ width: '130px' }}

              />
              <TextField
                label=""
                name="contactPhoneExt"
                value={formData.contactPhoneExt}
                onChange={handleChange}
                placeholder="Ext"
                style={{ width: '80px' }}
              />
            </div>
          </div>



          <div className="form-field bold-text">
            <label htmlFor="cellPhone" className="form-label ml-10">
              Complainant Cell Phone Number
            </label>
            <TextField
              label=""
              name="cellPhone"
              value={formData.cellPhone}
              onChange={handleChange}
              placeholder="(***) ***-****"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button
              className="nav-button"
              style={{ color: 'white' }}
              onClick={() => window.history.back()}
            >
              {'<'} Specify Complaint Type
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
              Filed Against Entity Information {'>'}
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ComplainantDetails; 