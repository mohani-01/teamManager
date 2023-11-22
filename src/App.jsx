import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Employees from './employees';

function App() {
  const [selectedTeam, setTeam] = useState("TeamB")
    
    const [employees, setEmployees] = useState( 
        [
        {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    }, {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
    }, {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
    }, {
        id: 4,
        fullName: "Nahom Niguse",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    }, {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    }, {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    }, { 
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
    }, {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    }, {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    }, {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    }, {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    }, {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }]);

    function handleTeamSelectionChange(event) {
            setTeam(event.target.value)
    }

    function handleEmpoyeeChange(event) {
                                                                // check if the employee is the current employee that is click on
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ? 
                                                                                    // check if the employee is under the selected team
                                                                                    employee.teamName === selectedTeam ? 
                                                                                    // if he/she is change the teamName of the employee to nothing
                                                                                                {...employee, teamName: ''}
                                                                                    // if  he/she is not change the teamName of the employee to the current team
                                                                                                : {...employee, teamName: selectedTeam}: 
                                                                                    // if the click person is note the current employee no change at all
                                                                                    employee);
        setEmployees(transformedEmployees)
    }

  return (
    <>
    <Header selectedTeam={selectedTeam} 
            teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
            />
    {/* <Content/> */}
    <Employees employees={employees}
              selectedTeam= {selectedTeam}
              handleEmpoyeeChange={handleEmpoyeeChange}
              handleTeamSelectionChange={handleTeamSelectionChange}

    />
    <Footer/>

    </>
  );
}

export default App;
