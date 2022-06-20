import { memo } from 'react';
import useElementOnScreen from '../util/IntersectionObserver/useElementOnScreen'
import './style.css'

const PureCounts = () => {
    const [ containerRef, isVisible ] = useElementOnScreen()

    return (
        <section id="counts" className="counts section-bg">
            <div className="container">
                <div 
                    className="row justify-content-end"
                    ref={containerRef}
                >

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span data-purecounter-start="0" data-purecounter-end="56" data-purecounter-duration="2"
                                className="purecounter">12</span>
                            <p>MAKTAB</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span data-purecounter-start="0" data-purecounter-end="22464" data-purecounter-duration="2"
                                className="purecounter">24</span>
                            <p>O`QUVCHI</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span data-purecounter-start="0" data-purecounter-end="987" data-purecounter-duration="2"
                                className="purecounter">444</span>
                            <p>O`QITUVCHI</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="2"
                                className="purecounter">6</span>
                            <p>TILDA TA'LIM OLIB BORILADI</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default memo(PureCounts)