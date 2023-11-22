const Header = ({selectedTeam, teamMemberCount}) => {
    

    return (
        <header className='container'>
            <div className="row justify-content-center mt-3 mb4">
                <div className="col-8">

                    <h1>Team Member Alloaction</h1>
                    <h3>{selectedTeam} has {teamMemberCount} Members </h3>
                </div>
            </div>
        </header>
    )
}

export default Header