import { NavLink } from "react-router-dom";
import './navbar.scss';
import Container from "../Container/Container";

export default function Navbar() {
    return (
        <div className="navbar">
            <Container>
                <div className="navbar-heading">
                    <h1>Meals <span>App</span></h1>
                </div>
                <div className="navbar-links">
                    <ul>
                        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink  to="/categories" activeClassName="active">Categories</NavLink></li>
                        <li><NavLink  to="/random" activeClassName="active">Random</NavLink></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
