import { Link } from "react-router-dom";
function Navbar() {
    return (

        <nav className="nav">
            <Link to="/Home" className="site-title">Health System Management</Link>
            <ul>
                <CustomLink to="/Home">Home</CustomLink>
                <CustomLink to="/NewRecord">New Record</CustomLink>
                <CustomLink to="/UserTable">Current Records</CustomLink>
            </ul>
        </nav>
    );
}
function CustomLink({ to, children, ...props }) {
    return (
        <li>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Navbar;