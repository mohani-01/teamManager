// import { useState  } from "react";
import Teams from "./Teams";
import TeamMembers from "./TeamMembers";


const Employees = ({handleEmployeeChange, handleTeamSelectionChange, employees, selectedTeam}) => {
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <Teams selectedTeam={selectedTeam} 
                    handleTeamSelectionChange={handleTeamSelectionChange}/>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                <div className="card-collection">
                    {

                <TeamMembers employees={employees} 
                             handleEmployeeChange={handleEmployeeChange} 
                            selectedTeam={selectedTeam}/>
                    }
                </div>
              </div>
            </div>
        </main>
    )
}

export default Employees;

