const Footer = () => {
    
    const today = new Date();
    return (
        <footer className="container">


            <h6> Team Member Allocation App - { today.getFullYear()} </h6>
        </footer>
    )
}

export default Footer