import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <nav className="logo">
            <h1>
                {/* change logo */}
                <Link to="/clothing"> <img src="https://i0.wp.com/textilelearner.net/wp-content/uploads/2022/10/Fashion-Illustration.jpg?fit=587%2C383&ssl=1" alt="logo" /></Link>
            </h1>
            <button>
                <Link to="/clothing/new">New Drops</Link>
            </button>
            <button>
                <Link to="/clothing/about"> Meet the Developer</Link>
            </button>
        </nav>
    );
}