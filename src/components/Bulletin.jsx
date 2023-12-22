import getInput from "./getInput"
export default function Bulletin({mobile,email}){
    return(
        <>
        <div className="bulletins">
        <span>📱 :{getInput(mobile,"1234567890")}</span>
        <span>📧 : {getInput(email,"example@xyz.com")}</span>
        </div>
        </>
    )
}