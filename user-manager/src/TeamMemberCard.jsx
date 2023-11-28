import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const TeamMemberCard = ({employee, handleEmployeeChange, selectedTeam }) => {
    return (
        <div key={employee.id} id={employee.id} className={( employee.teamName === selectedTeam ? 'card m-1 standout' : 'card m-1')} style={{cursor: "pointer"}} onClick={handleEmployeeChange}>
            {( employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" alt={employee.fullName } /> : <img src={femaleProfile} className="card-img-top" alt={employee.fullName } />
            
            }
            <div className="card-body">
                <h4 className="card-title">Full Name: {employee.fullName} </h4>
                <p className="card-text"><b>Designation:</b> {employee.designation} </p>
            </div>
        </div>
       
    )
    }
    
    
export default TeamMemberCard;
    
    