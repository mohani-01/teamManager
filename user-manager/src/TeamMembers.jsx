import TeamMemberCard from "./TeamMemberCard";


const TeamMembers = ({employees, handleEmployeeChange, selectedTeam }) => {
    return (
        employees.map((employee) => (
            <TeamMemberCard employee={employee} handleEmployeeChange={handleEmployeeChange} selectedTeam={selectedTeam}/>
        ))
    )
    }
    
    
export default TeamMembers;
    
    