import "../css/Header.css";
import logo from "../assets/logo.JPEG XR";
function Header() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Navbar brand */}
                    <div className="d-flex">
                        <img src={logo} className="logo" alt="Shaur Educational Complex" />
                        <div className="logo-text">
                            Shaur Educational Complex
                        </div>
                    </div>

                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </div>
    );
}

export default Header;
