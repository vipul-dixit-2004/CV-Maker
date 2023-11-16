import { useState } from "react";
import profileLogo from '../assets/profile.png';
function getInput(nameName,exception){
    return nameName.length===0?exception:nameName
}
function InputSection(){
    const [nameInp,setName] = useState('')
    const [emailInp,setEmail] = useState('')
    const [mobInp,setMob] = useState('')
    const [jobInp,setJob] = useState('')
    // const [mobInp,setMob] = useState('')
    const [imgInp,setImg] = useState(profileLogo)
return (
<div className="mainApp">
<div className="inputSec">
<form>
    <label htmlFor="nameInp">Enter Name: </label>
    <input type="text" id="nameInp" name="nameInp" onChange={(e)=>setName(e.target.value)}/><br/>
    <label htmlFor="emailInp">Enter Email: </label>
    <input type="email" id="emailInp" name="emailInp" onChange={(e)=>setEmail(e.target.value)}/><br/>
    <label htmlFor="mobInp">Enter Contact No.: </label>
    <input type="number" maxLength={10} id="mobInp" name="mobInp" onChange={(e)=>setMob(e.target.value)}/><br/>
    <label htmlFor="jobInt">Enter Job Details: </label>
    <textarea type="text" id="jobInp" name="jobInp" onChange={(e)=>setJob(e.target.value)}></textarea><br/>
    <label htmlFor="qualificationInp">Enter Qualifications: </label>
    <textarea type="text" id="qualificationInp" name="qualificationInp"></textarea>,<br />
    <label htmlFor="qualificationInp">Select image: </label>
    <input type="file" name="imgInp" onChange={(e)=>setImg(e.target.value)}/>
</form>
</div>
<div className="outputSec">
    <div className="CV">
        <div className="heading">
        <div className="personalInfo">
            <h1>{getInput(nameInp,"Your Name")}</h1>
        </div>
        <div className="profile">
            <img src={imgInp} height={"200px"}  className="profileImage rounded float-end" alt="ProfilePhoto"/>
        </div>
        </div>
        <div className="bulletins">
        <span>📱 :{getInput(mobInp,"1234567890")}</span>
        <span>📧 : {getInput(emailInp,"example@xyz.com")}</span>
        </div>
        <div className="content">
            <div className="details">
                <h2>Job Experiences</h2>
                <pre>{getInput(jobInp,"")}</pre>

            </div>
        </div>
    </div>
</div>
</div>

)
}

export default InputSection;