import React, { use, useReducer, useRef, useState } from "react";
import axios from "axios"
import API from "../../../API/API"

import {
    Stepper,
    Step,
    StepLabel,
    Button,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Typography,
    Box,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
    Input,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UploadToCloudinary } from "../../../hooks/cloudinaryConfig";

const steps = ["Basic Details", "Address & Qualification", "Document Uploads", "Payment & Submission"];

const RegistrationForm = () => {
    const navigate = useNavigate()
    const {user}=useSelector((store)=>store.user);
    // console.log(user);
    
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        email: "",
        contact: "",
        dob: "",
        gender: "",
        maritalStatus: "",
        localAddress: "",
        permanentAddress: "",
        qualification: "",
        annualIncome: "",
        reference: "",
        courseType: "",
        preferredCity: "",
        userID: user._id
    });
    
    const [myFiles, dispatch] = useReducer((myFiles,action)=>{
        if(action.type == "aadhar")
            myFiles.aadhar = action.payload
        else if(action.type == "fatherAadhar")
            myFiles.fatherAadhar = action.payload
        else if(action.type == "passportPhoto")
            myFiles.passportPhoto = action.payload
        else if(action.type == "marksheet12")
            myFiles.marksheet12 = action.payload
        else if(action.type == "latestMarksheet")
            myFiles.latestMarksheet = action.payload
        else if(action.type == "samagraId")
            myFiles.samagraId = action.payload
        else if(action.type == "incomeCertificate")
            myFiles.incomeCertificate = action.payload
        return {...myFiles}
    },{
        
        aadhar: {},
        fatherAadhar: {},
        passportPhoto: {},
        marksheet12: {},
        latestMarksheet: {},
        samagraId: {},
        incomeCertificate: {}
    })

    const hand = (type, event) => {
        const file = event.target.files[0];
        // console.log(file);
        dispatch({ type, payload: file });
      };

    

    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {        
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
    };

    // Validation before going to the next step
    const validateStep = () => {
        let newErrors = {};

        if (activeStep === 0) {
            if (!formData.name) newErrors.name = "Required";
            if (!formData.fatherName) newErrors.fatherName = "Required";
            if (!formData.email) newErrors.email = "Required";
            if (!formData.contact) newErrors.contact = "Required";
            if (!formData.dob) newErrors.dob = "Required";
            if (!formData.gender) newErrors.gender = "Required";
            if (!formData.maritalStatus) newErrors.maritalStatus = "Required";
        }
        else if (activeStep === 1) {
            if (!formData.localAddress) newErrors.localAddress = "Required";
            if (!formData.permanentAddress) newErrors.permanentAddress = "Required";
            if (!formData.qualification) newErrors.qualification = "Required";
            if (!formData.annualIncome) newErrors.annualIncome = "Required";
            if (!formData.courseType) newErrors.courseType = "Required";
            if (!formData.preferredCity) newErrors.preferredCity = "Required";
        }

        // else if (activeStep === 2) {
        //     if (!formData.aadhar) newErrors.aadhar = "Required";
        //     if (!formData.fatherAadhar) newErrors.fatherAadhar = "Required";
        //     if (!formData.passportPhoto) newErrors.passportPhoto = "Required";
        //     if (!formData.marksheet12) newErrors.marksheet12 = "Required";
        //     if (!formData.latestMarksheet) newErrors.latestMarksheet = "Required";
        //     if (!formData.samagraId) newErrors.samagraId = "Required";
        //     if (!formData.incomeCertificate) newErrors.incomeCertificate = "Required";
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle next step
    const handleNext = () => {
        if (validateStep()) setActiveStep(activeStep + 1)
    };

    // Handle previous step
    const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

    // Handle final submission
    const handleSubmit = async (e) => {
        //For Multer
        // sendData();

        try {
            let aadhar_url = await UploadToCloudinary(myFiles.aadhar);
            let fatherAadhar_url = await UploadToCloudinary(myFiles.fatherAadhar);
            let passportPhoto_url = await UploadToCloudinary(myFiles.passportPhoto);
            let marksheet12_url = await UploadToCloudinary(myFiles.marksheet12);
            let latestMarksheet_url = await UploadToCloudinary(myFiles.latestMarksheet);
            let samagraId_url = await UploadToCloudinary(myFiles.samagraId);
            let incomeCertificate_url = await UploadToCloudinary(myFiles.incomeCertificate);

            const obj = {...formData,aadhar:aadhar_url,fatherAadhar:fatherAadhar_url,passportPhoto:passportPhoto_url,marksheet12:marksheet12_url,latestMarksheet:latestMarksheet_url,samagraId:samagraId_url,incomeCertificate:incomeCertificate_url} 
            
            let response = await axios.post(API.REGISTER_FOR_COURSE,obj)
            // console.log(response.data);
            if(response.data.message == "Registration working"){
                window.alert("Registration Successful");
                navigate("/")
            }else{
                window.alert("Registration Failed");
                navigate("/register")
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const sendData = async ()=>{
    //     try {
    //     const f = new FormData();
    //     f.append("name",formData.name)
    //     f.append("fatherName",formData.fatherName)
    //     f.append("email",formData.email)
    //     f.append("contact",formData.contact)
    //     f.append("dob",formData.dob)
    //     f.append("gender",formData.gender)
    //     f.append("maritalStatus",formData.maritalStatus)
    //     f.append("localAddress",formData.localAddress)
    //     f.append("permanentAddress",formData.permanentAddress)
    //     f.append("qualification",formData.qualification)
    //     f.append("annualIncome",formData.annualIncome)
    //     f.append("reference",formData.reference)
    //     f.append("courseType",formData.courseType)
    //     f.append("preferredCity",formData.preferredCity)
    //     f.append("userID",formData.userID)
    //     f.append("aadhar",myFiles.aadhar)
    //     f.append("fatherAadhar",myFiles.fatherAadhar)
    //     f.append("passportPhoto",myFiles.passportPhoto)
    //     f.append("marksheet12",myFiles.marksheet12)
    //     f.append("latestMarksheet",myFiles.latestMarksheet)
    //     f.append("samagraId",myFiles.samagraId)
    //     f.append("incomeCertificate",myFiles.incomeCertificate)
    //     const obj = {...formData,...myFiles} 
    //     console.log(obj)
    //     // let response = await axios.post(url, f)
    //     let response = await axios.post(API.REGISTER_FOR_COURSE,obj,{
    //         headers: {
    //           "Content-Type": "multipart/form-data",
    //         },
    //       })
    //     console.log(response.data);
    //     if(response.data.message == "Registration working"){
    //         window.alert("Registration Successful");
    //         navigate("/")
    //     }else{
    //         window.alert("Registration Failed");
    //         navigate("/register")
    //     }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const sendData = async ()=>{
        try {
            const obj = {...formData,...myFiles} 
            console.log(obj)
        } catch (error) {
            console.log(error);
        }
    }

    const aadhar = useRef();
    const fatherAadhar = useRef();
    const passportPhoto = useRef();
    const marksheet12 = useRef();
    const latestMarksheet = useRef();
    const samagraId = useRef();
    const incomeCertificate = useRef();

    // Render form fields based on step
    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div className="">
                        <TextField label="Name" name="name" fullWidth margin="normal" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
                        <TextField label="Father's Name" name="fatherName" fullWidth margin="normal" value={formData.fatherName} onChange={handleChange} error={!!errors.fatherName} helperText={errors.fatherName} />
                        <TextField label="Email" name="email" fullWidth margin="normal" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />
                        <TextField label="Contact" name="contact" fullWidth margin="normal" value={formData.contact} onChange={handleChange} error={!!errors.contact} helperText={errors.contact} />
                        <FormControl component="fieldset" margin="normal" error={!!errors.gender}>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl><br/>
                        <FormControl component="fieldset" margin="normal" error={!!errors.gender}>
                            <FormLabel>Marital Status</FormLabel>
                            <RadioGroup row name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                                <FormControlLabel value="married" control={<Radio />} label="Married" />
                                <FormControlLabel value="unmarried" control={<Radio />} label="Unmarried" />
                            </RadioGroup>
                        </FormControl>
                        <TextField label="Date of Birth" type="date" name="dob" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={formData.dob} onChange={handleChange} error={!!errors.dob} helperText={errors.dob} />
                    </div>
                );
            case 1:
                return (
                    <>
                        <>
                            <TextField
                                label="Local Address"
                                name="localAddress"
                                fullWidth
                                margin="normal"
                                value={formData.localAddress}
                                onChange={handleChange}
                                error={!!errors.localAddress}
                                helperText={errors.localAddress}
                            />

                            <TextField
                                label="Permanent Address"
                                name="permanentAddress"
                                fullWidth
                                margin="normal"
                                value={formData.permanentAddress}
                                onChange={handleChange}
                                error={!!errors.permanentAddress}
                                helperText={errors.permanentAddress}
                            />

                            <TextField
                                label="Qualification"
                                name="qualification"
                                fullWidth
                                margin="normal"
                                value={formData.qualification}
                                onChange={handleChange}
                                error={!!errors.qualification}
                                helperText={errors.qualification}
                            />

                            {/* Annual Income Dropdown */}
                            <FormControl fullWidth margin="normal" error={!!errors.annualIncome}>
                                <InputLabel>Annual Income</InputLabel>
                                <Select
                                    name="annualIncome"
                                    value={formData.annualIncome}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="0-3L">0 - 3 LPA</MenuItem>
                                    <MenuItem value="3-6L">3 - 6 LPA</MenuItem>
                                    <MenuItem value="6-10L">6 - 10 LPA</MenuItem>
                                    <MenuItem value="10-15L">10 - 15 LPA</MenuItem>
                                    <MenuItem value="More Than 15 LPA">More Than 15 LPA</MenuItem>
                                </Select>
                                <FormHelperText>{errors.annualIncome}</FormHelperText>
                            </FormControl>

                            {/* Course Type Dropdown */}
                            <FormControl fullWidth margin="normal" error={!!errors.courseType}>
                                <InputLabel>Course Type</InputLabel>
                                <Select
                                    name="courseType"
                                    value={formData.courseType}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="ITEP">ITEP</MenuItem>
                                    <MenuItem value="BREP">BREP</MenuItem>
                                </Select>
                                <FormHelperText>{errors.courseType}</FormHelperText>
                            </FormControl>

                            {/* Preferred City Dropdown */}
                            <FormControl fullWidth margin="normal" error={!!errors.preferredCity}>
                                <InputLabel>Preferred City</InputLabel>
                                <Select
                                    name="preferredCity"
                                    value={formData.preferredCity}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Indore">Indore</MenuItem>
                                    <MenuItem value="Pune">Pune</MenuItem>
                                </Select>
                                <FormHelperText>{errors.preferredCity}</FormHelperText>
                            </FormControl>

                            {/* Reference Dropdown */}
                            <FormControl fullWidth margin="normal" error={!!errors.reference}>
                                <InputLabel>Reference</InputLabel>
                                <Select
                                    name="reference"
                                    value={formData.reference}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                                    <MenuItem value="Instagram">Instagram</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Print Media">Print Media</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                                <FormHelperText>{errors.reference}</FormHelperText>
                            </FormControl>
                        </>

                    </>
                );
            case 2:
                return (
                    <>
                        <table className="table" style={{ width: "auto" }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <Input type="file" ref={aadhar} onChange={(e)=>hand("aadhar",e)} name="aadhar" fullWidth margin="normal"  />
                                    </td>
                                    <td className="align-items-center">
                                        <h3>Aadhar</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input type="file" ref={fatherAadhar} onChange={(e)=>hand("fatherAadhar",e)} name="fatherAadhar" fullWidth margin="normal"  />
                                    </td>
                                    <td className="align-items-center">
                                        <h3>Father's Aadhar</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="file" ref={passportPhoto} label="passportPhoto" onChange={(e)=>hand("passportPhoto",e)} name="passportPhoto" fullWidth margin="normal"  />
                                    </td>
                                    <td className="align-items-center">
                                        <h3>Passport Size Photo</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input type="file" ref={marksheet12} label="marksheet12" onChange={(e)=>hand("marksheet12",e)} name="marksheet12" fullWidth margin="normal"  />
                                    </td>
                                    <td className="align-items-center">
                                        <h3>12th Marksheet</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input type="file" ref={latestMarksheet} label="latestMarksheet" onChange={(e)=>hand("latestMarksheet",e)} name="latestMarksheet" fullWidth margin="normal"  />
                                    </td>
                                    <td className="align-items-center">
                                        <h3>Latest marksheet</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input type="file" ref={samagraId} label="samagraId" onChange={(e)=>hand("samagraId",e)} name="samagraId" fullWidth margin="normal"   />
                                    </td>
                                    <td className="align-items-center">
                                        <h3>Samagra Id</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input type="file" ref={incomeCertificate} label="incomeCertificate" onChange={(e)=>hand("incomeCertificate",e)} name="incomeCertificate" fullWidth margin="normal"  />
                                    </td>
                                    <td className="align-items-center">
                                        <h3>Income Certificate</h3>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                );
            case 3:
                return <Typography>Proceed to payment and submit the form.</Typography>;
            default:
                return null;
        }
    };

    return (
        
        <Box sx={{ width: "80%", margin: "auto", mt: 5 }}>
            <h1 className="d-flex justify-content-center mb-5">Registration Form</h1>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index} onClick={() => {if(index<activeStep){setActiveStep(index)}}} style={{ cursor: "pointer" }}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ mt: 3 }}>{renderStepContent(activeStep)}</Box>
            <Box sx={{ mt: 2 }}>
                {activeStep > 0 && <Button onClick={handleBack}>Back</Button>}
                {activeStep < steps.length - 1 && <Button variant="contained" onClick={handleNext}>Next</Button>}
                {activeStep === steps.length - 1 && <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>}
            </Box>
        </Box>
    );
};

export default RegistrationForm;
