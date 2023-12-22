import Header from './Header';
import Bulletin from './Bulletin';
import Content from './Content';
function CvGenerated({nameInp,jobInp,profileLogo,mobInp,emailInp,qualifiInp,jobPostInp}){
    return(
       <><div className="outputSec">
       <div className="CV">
          <Header fullName={nameInp} position={jobPostInp} image={profileLogo} />
          <Bulletin mobile={mobInp} email={emailInp}/>
          <Content jobExperience={jobInp} qualifications={qualifiInp}/>
       </div>
   </div></>
    );
}
export default CvGenerated