import getInput from "./getInput"
export default function Content({jobExperience,qualifications}){
    return(
        <>
        <div className="content">
            <div className="details">
                <h2>Job Experiences</h2>
                <div className="job-section">
                    <pre>{getInput(jobExperience,"Your job descriptions displays here......")}</pre>
                </div>
                <h2>Qualifications</h2>
                <div className="qualification-section">
                    <pre>{getInput(qualifications,"Your all Qualifications goes here.....")}</pre>
                </div>

            </div>
        </div>
        </>
    )
}