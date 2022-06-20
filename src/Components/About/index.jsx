import './style.css'

const About = () => {
    return (
        <div className="container">
            <div className="section-title" id="about">
                <h2>Biz Haqimizda</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. </p>
            </div>

            <div className="row content">
                <div className="col-lg-6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore
                        magna aliqua.
                    </p>
                    <ul>
                        <li>
                            <i className="icon green-icon checkmark-done-outline"></i>
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat
                        </li>
                        <li>
                            <i className="icon green-icon checkmark-done-outline"></i>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit
                        </li>
                        <li>
                            <i className="icon green-icon checkmark-done-outline"></i>
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#" className="btn-learn-more">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default About