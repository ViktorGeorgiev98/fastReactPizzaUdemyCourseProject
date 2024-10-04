import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to='/'>Pizza Co.</Link>
            <p>Something static</p>
        </header>
    )
}

export default Header;