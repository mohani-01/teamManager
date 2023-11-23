import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import Header from './header';
import Footer from './footer';
import Employees from './employees';
import GroupedTeamMembers from './GroupedTeamMembers';
import NotFound from './NotFound';
import Nav from './Nav';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB")
    
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
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

    useEffect(() => {
      localStorage.setItem('employeeList', JSON.stringify(employees))
    }, [employees]) 
    
    useEffect(() => {
      localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
    }, [selectedTeam])
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
    <Router>
    <Nav/>
    <Header selectedTeam={selectedTeam} 
            teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
            />
    <Routes>
        <Route path='/' element={<Employees employees={employees}
                selectedTeam= {selectedTeam}
                handleEmpoyeeChange={handleEmpoyeeChange}
                handleTeamSelectionChange={handleTeamSelectionChange}/>}>
        </Route>
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam}
                                                                            />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
    

    </Routes>
    <Footer/>

    </Router>
  );
}

export default App;
