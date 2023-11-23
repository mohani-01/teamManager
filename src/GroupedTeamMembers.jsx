import { useState }  from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData ] = useState(groupTeamMembers());

    function groupTeamMembers() {
        let teams = [];

        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = {team: "TeamA", members: teamAMembers, collapsed: selectedTeam == 'TeamA' ? false: true}
        teams.push(teamA)

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = {team: "TeamB", members: teamBMembers, collapsed: selectedTeam == 'TeamB' ? false: true}
        teams.push(teamB)

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = {team: "TeamC", members: teamCMembers, collapsed: selectedTeam == 'TeamC' ? false: true}
        teams.push(teamC)

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = {team: "TeamD", members: teamDMembers, collapsed: selectedTeam == 'TeamD' ? false: true}
        teams.push(teamD)

        return teams;
    }
    return ( 
<main className='container'>

        <div className="row justify-content-center mt-3 mb4">
        <div className="col-8">
        <h1>Group Team Members</h1>
        {
            

             groupedEmployees.map((item) => {
                 return ( 
                    <div key={item.team} className='card mt-2' style={{cursor: "pointer"}}>
                        <h4 id={item.team} className='card-header text-secondary bg-white' >
                            Team Name: {item.team}
                        </h4>
                        <div id={"collapse_"+ item.team} className={item.collapsed === true ? "collapsed": ""}>
                            <hr/> 
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
</main>
    )
}

export default GroupedTeamMembers