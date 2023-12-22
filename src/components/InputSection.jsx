import { useState } from "react";
import profileLogo from '../assets/profile.png';
import CvGenerated from './CvGenerated';
function InputSection(){
    const [nameInp,setName] = useState('')
    const [emailInp,setEmail] = useState('')
    const [mobInp,setMob] = useState('')
    const [jobInp,setJob] = useState('')
    const [jobPostInp,setJobPost] = useState('')
    const [qualifiInp,setQualifi] = useState('')
    const [imgInp,setImg] = useState(profileLogo)
return (
<div className="mainApp">
<div className="inputSec">
<form>
    <label htmlFor="nameInp">Enter Name: </label>
    <input type="text" id="nameInp" name="nameInp" onChange={(e)=>setName(e.target.value)}/><br/>
    <label htmlFor="nameInp">Applying for: </label>
    <input type="text" id="postInp" name="postInp" onChange={(e)=>setJobPost(e.target.value)}/><br/>
    <label htmlFor="emailInp">Enter Email: </label>
    <input type="email" id="emailInp" name="emailInp" onChange={(e)=>setEmail(e.target.value)}/><br/>
    <label htmlFor="mobInp">Enter Contact No.: </label>
    <input type="number" maxLength={10} id="mobInp" name="mobInp" onChange={(e)=>setMob(e.target.value)}/><br/>
    <label htmlFor="jobInt">Enter Job Details: </label>
    <textarea type="text" id="jobInp" name="jobInp" onChange={(e)=>setJob(e.target.value)}></textarea><br/>
    <label htmlFor="qualificationInp">Enter Qualifications: </label>
    <textarea type="text" id="qualificationInp" name="qualificationInp" onChange={(e)=>setQualifi(e.target.value)}></textarea>,<br />
    <label htmlFor="imgInp">Select image: </label>
    <input type="file" name="imgInp" onChange={(e)=>setImg(e.target.value)}/>
</form>
</div>
<CvGenerated nameInp={nameInp} jobPostInp={jobPostInp} jobInp={jobInp} profileLogo={profileLogo} mobInp={mobInp} emailInp={emailInp} qualifiInp={qualifiInp}/>
</div>

)
}

export default InputSection;