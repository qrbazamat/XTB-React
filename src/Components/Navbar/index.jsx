import './style.css'
import UzEduLogo from '../Images/UzEDU-Logo.png'

const Navbar = () => {
    return (
        <div className="navbar" id="navbar">
            <a 
                href="https://uzedu.uz" 
                className="logo" 
                style={{
                    textDecoration: 'none'
                }}
                target="_blank">
                <img 
                    src={UzEduLogo} 
                    alt="Logo" 
                />
                    <h4 className="title">XTBT</h4>
            </a>
            <div className="links">
                <a href="#top" className="scrollto active">
                    <h4>Asosiy</h4>
                </a>
                <a href="#about" className="scrollto">
                    <h4>Haqida</h4>
                </a>
                <a href="#contact" className="scrollto">
                    <h4>Aloqa</h4>
                </a>
            </div>
            <div className="language">
                <select className="h5" name="language" id="language">
                    <option value="lotin">o'zbekcha</option>
                    <option value="kril">ўзбекча</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar