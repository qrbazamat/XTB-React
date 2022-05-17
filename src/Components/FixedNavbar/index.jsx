import './style.css'

const FixedNavbar = () => {
    return (
        <ul className="fixed-navbar-menu">
            <a href="#top" className="active scrollto">
                <i className="icon white-icon home-outline"></i>
            </a>
            <a href="#about" className="scrollto">
                <i className="icon white-icon help-circle-outline"></i>
            </a>
            <a href="#address" className="scrollto">
                <i className="icon white-icon location-outline"></i>
            </a>
            <a href="#contact" className="scrollto">
                <i className="icon white-icon call-outline"></i>
            </a>
        </ul>
    )
}

export default FixedNavbar