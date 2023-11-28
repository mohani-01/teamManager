import { useState }  from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData ] = useState(groupTeamMembers());
    
    function handleTeamMembers (event) {
        let newGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
                                                        ? {...groupedData, collapsed:!groupedData.collapsed}: groupedData);
   setGroupedData(newGroupData)
   setTeam(event.currentTarget.id)
}
    function groupTeamMembers() {
        let teams = [];

        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = {team: "TeamA", members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false: true}
        teams.push(teamA)

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = {team: "TeamB", members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false: true}
        teams.push(teamB)

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = {team: "TeamC", members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false: true}
        teams.push(teamC)

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = {team: "TeamD", members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false: true}
        teams.push(teamD)

        return teams;
    }
    return ( 
<main className='container'>

        <div className="row justify-content-center mt-3 mb4">
        <div className="col-8">
        <h1>Group Team Members</h1>
            
            <div className='team-container mt-4'> 
        {
             groupedEmployees.map((item) => {
                 return ( 
                    <div key={item.team}  id={item.team} className='card mt-2 border border-dark' style={{cursor: "pointer"}} onClick={handleTeamMembers}>
                        <h4 className='card-header text-secondary bg-white' >
                            Team Name: {item.team}
                        </h4>
                        <div id={"collapse_"+ item.team} className={item.collapsed === true ? "collapse": ""}>
                            {
                                item.members.map(member => {
                                    return (
                                        <div className='mt-2'>
                                            <h5 className='card-title mt-2'>
                                                <span className='text-dark'>Full Name: {member.fullName} </span>
                                                <p>Designation: {member.designation} </p>
                                            </h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )  
            }) 
        }
            </div>
        </div>
    </div>
</main>
    )
}

export default GroupedTeamMembers;