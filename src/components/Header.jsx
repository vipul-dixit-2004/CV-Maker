import getInput from "./getInput.js";
export default function Header(props){
    return(
        <>
         <div className="heading">
        <div className="personalInfo">
            <div className="text-con">
            <h1>{getInput(props.fullName,"Your Name")}</h1>
            <h3>{getInput(props.position,"(Post)")}</h3>
            </div>
        </div>
        <div className="profile">
            <img src={props.image} height={"200px"}  className="profileImage rounded float-end" alt="ProfilePhoto"/>
        </div>
        </div>
        </>
    )
}