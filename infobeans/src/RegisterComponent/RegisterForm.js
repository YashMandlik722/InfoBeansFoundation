import React, { useRef, useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  // Step 1: Basic Information
  const [step, setStep] = useState(1);
  // const [educationInfo, setEducationInfo] = useState({
    
  //   aadhar_url:null,
  //   fatherAadhar_url:null,
  //   photo_url:null,
  //   marksheet_12_url:null,
  //   marksheet_latest_url:null,
  //   samagraId_url:null,
  //   incomeCertificate_url:null,
  //   transactionId:null,

  // });

   const  emailref=useRef();
   const  nameref=useRef();
   const  fathernameref=useRef();
   const  DOBref=useRef();
   const  localAddressref=useRef();
   const  permanentAddressref=useRef();
   const  genderref=useRef();
   const  contactref=useRef();
   const  maritalStatusref=useRef();
   const  qualificationref=useRef();
   const  AnnualIncomeref=useRef();
   const  preferredCityref=useRef();
   const  referrenceref=useRef();
   const  courseTyperef=useRef();


  const [paymentInfo, setPaymentInfo] = useState({
    screenshot: null,
  });

  // Track which steps are completed
  const [completedSteps, setCompletedSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  // Handle input changes
  // const handleBasicInfoChange = (e) => {
  //   const { name, value } = e.target;
  //   setBasicInfo({ ...basicInfo, [name]: value });
  // };

  // const handleEducationInfoChange = (e) => {
  //   const { name, files } = e.target;
  //   setEducationInfo({ ...educationInfo, [name]: files[0] });
  // };

  const handlePaymentInfoChange = (e) => {
    const { name, files } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: files[0] });
  };

  // Handle Next and Previous Step
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      if (step === 1) {
        setCompletedSteps({ ...completedSteps, step1: true });
      } else if (step === 2) {
        setCompletedSteps({ ...completedSteps, step2: true });
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      if (step === 2) {
        setCompletedSteps({ ...completedSteps, step2: false });
      } else if (step === 3) {
        setCompletedSteps({ ...completedSteps, step3: false });
      }
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const basicInfo ={
        email:emailref.current.value,
        name:nameref.current.value,
        fathername:fathernameref.current.value,
        DOB:DOBref.current.value,
        localAddress:localAddressref.current.value,
        permanentAddress:permanentAddressref.current.value,
        gender:genderref.current.value,
        contact:contactref.current.value,
        maritalStatus:maritalStatusref.current.value,
        qualification:qualificationref.current.value,
        AnnualIncome:AnnualIncomeref.current.value,
        preferredCity:preferredCityref.current.value,
        referrence:referrenceref.current.value,
        courseType:courseTyperef.current.value,
      }
   
    console.log('Form Submitted:', { paymentInfo });
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <div className="step-icons">
        <i
          className={`fa ${completedSteps.step1 ? 'fa-check-circle' : 'fa-circle'} step-icon`}
          style={{ color: completedSteps.step1 ? 'green' : 'gray' }}
        ></i>
        <i
          className={`fa ${completedSteps.step2 ? 'fa-check-circle' : 'fa-circle'} step-icon`}
          style={{ color: completedSteps.step2 ? 'green' : 'gray' }}
        ></i>
        <i
          className={`fa ${completedSteps.step3 ? 'fa-check-circle' : 'fa-circle'} step-icon`}
          style={{ color: completedSteps.step3 ? 'green' : 'gray' }}
        ></i>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="step">
            <h3>Step 1: Basic Information</h3>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                ref={emailref}
                required
              />
            </div>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                ref={nameref}
                required
              />
            </div>
            <div>
              <label>FatherName:</label>
              <input
                type="text"
                name="fathername"
                ref={fathernameref}
                required
              />
            </div>
            <div>
              <label>DOB:</label>
              <input
                type="date"
                name="dob"
                ref={DOBref}
                required
              />
            </div>
            <div>
              <label>localAddress:</label>
              <input
                type="text"
                name="localAdress"
                ref={localAddressref}
                required
              />
            </div>
            <div>
              <label>permanentAddress:</label>
              <input
                type="text"
                name="parmanentAddress"
                ref={permanentAddressref}
                required
              />
            </div>
            <div>
              <label>Gender:</label>
              <input
                type="text"
                name="Gender"
                ref={genderref}
                required
              />
            </div>
            <div>
              <label>Contact:</label>
              <input
                type="number"
                name="contact"
                ref={contactref}
                required
              />
            </div>
            <div>
              <label>maritalStatus:</label>
              <input
                type="text"
                name="maritalStatus"
                ref={maritalStatusref}
                required
              />
            </div>
            <div>
              <label>qualification:</label>
              <input
                type="text"
                name="qualification"
                ref={qualificationref}
                required
              />
            </div>
            <div>
              <label>AnnualIncome:</label>
              <input
                type="number"
                name="AnnualIncome"
                ref={AnnualIncomeref}
                required
              />
            </div>
            <div>
              <label>preferredCity:</label>
              <input
                type="text"
                name="preferredCity"
                ref={preferredCityref}
                required
              />
            </div>
            <div>
              <label>referrence:</label>
              <input
                type="text"
                name="referrence"
                ref={referrenceref}
                required
              />
            </div>
            <div>
              <label>courseType:</label>
              <input
                type="text"
                name="courseType"
                ref={courseTyperef}
                required
              />
            </div>
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h3>Step 2: Education Information</h3>
            <div>
              <label>Upload Aadhar_Card:</label>
              <input
                type="file"
                name="document"
                // onChange={handleEducationInfoChange}
                required
              />
            </div> <div>
              <label>Upload FatherAadhar_Card:</label>
              <input
                type="file"
                name="document"
                // onChange={handleEducationInfoChange}
                required
              />
            </div>
            <div>
              <label>Upload Passport Photo:</label>
              <input
                type="file"
                name="document"
                // onChange={handleEducationInfoChange}
                required
              />
            </div>
            <div>
              <label>Upload 12 Marksheet:</label>
              <input
                type="file"
                name="document"
                // onChange={handleEducationInfoChange}
                required
              />
            </div>
            <div>
              <label>Upload Marksheet_latest_degree:</label>
              <input
                type="file"
                name="document"
                // onChange={handleEducationInfoChange}
                required
              />
            </div>
            <div>
              <label>Upload samagraId:</label>
              <input
                type="file"
                name="document"
                // onChange={handleEducationInfoChange}
                required
              />
            </div>
            <div>
              <label>Upload incomeCertificate:</label>
              <input
                type="file"
                name="document"
                // onChange={handleEducationInfoChange}
                required
              />
            </div>
            <div>
              <label>Upload transactionId:</label>
              <input
                type="file"
                name="document"
                // onChange={handleEducationInfoChange}
                required
              />
            </div>
            <button type="button" onClick={handlePrev}>Previous</button>
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h3>Step 3: Payment Information</h3>
         <div>
          <img src='../Images/RegScan.jpg'  style={{height:"300px" , marginLeft:"200px"}}/>
         </div>
            <div>
              <label>Upload Payment Screenshot:</label>
              <input
                type="file"
                name="screenshot"
                onChange={handlePaymentInfoChange}
                required
              />
            </div>
            <button type="button" onClick={handlePrev}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
