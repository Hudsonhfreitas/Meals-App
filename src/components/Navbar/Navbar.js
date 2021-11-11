import { Link } from "react-router-dom";
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">Categories</Link></li>
                    <li><Link to="/random">Random</Link></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
