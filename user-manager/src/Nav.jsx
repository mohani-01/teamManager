import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
         <nav className='navbar  navbar-expand navbar-light bg-light'>
            <div className="container  justify-content-center ">
                <div className="col-8">
                <ul className=" navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/GroupedTeamMembers">Teams</Link>
                    </li>
                </ul>
                </div>
            
                
            </div>
        </nav>
        </>

    )
}

export default Nav