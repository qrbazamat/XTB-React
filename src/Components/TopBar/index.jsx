import './style.css'
import BgImage from '../Images/bg-image/bg-main-image.jpeg'

const TopBar = () => {
    return (
        <div className="top-bar">
            <div 
                className="banner"
                style={{
                    backgroundImage: `url(${BgImage})`
                }}
            >
                <div className="content">
                    <div className="item">
                        <i className="icon white-icon people-outline"></i>
                        <span>1 700 000</span>
                    </div>
                    <div className="item">
                        <i className="icon white-icon eye-outline"></i>
                        <span>1 700 000</span>
                    </div>
                    <div className="item">
                        <i className="icon white-icon flag-outline"></i>
                        <span>1 700 000</span>
                    </div>
                    <div className="item">
                        <i className="icon white-icon lock-closed-outline"></i>
                        <span>1 700 000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar