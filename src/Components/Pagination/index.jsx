import './style.css'

// Class of Tailwinds CSS
const pagClass = 'h-10 px-3 transition-colors duration-150 focus:shadow-outline border border-indigo-600 text-'
const prevNextClass = pagClass + 'indigo-600 bg-white hover:bg-indigo-100 rounded-'
const prevClass = prevNextClass + 'l-lg border-r-0'
const nextClass = prevNextClass + 'r-lg'
const defaultClass = pagClass + 'indigo-600 border-r-0 bg-white hover:bg-indigo-100'
const activeClass = pagClass + 'white border-r-0 bg-indigo-600'

const Pagination = ({ count, currentPage = 1, handlePagination }) => {
    const prevHandleClick = () => {
        if(currentPage > 1) {
            handlePagination(currentPage - 1)
        }
    }

    const nextHandleClick = () => {
        if(currentPage < count) {
            handlePagination(currentPage + 1)
        }
    }

    return (
        <nav
            aria-label="Page navigation"
            id="post-pagination"
            style={{
                width: '100%',
                margin: '40px 0',
                textAlign: 'center'
            }}
        >
            <ul className="inline-flex">
                <li className="prev" >
                    <button
                        className={prevClass}
                        onClick={prevHandleClick}
                    >
                        &lt;
                    </button>
                </li>

                {
                    (new Array(count).fill(null))?.map((a, index) => (
                        <li 
                            className="pag-btn" key={index}
                            onClick={() => handlePagination(index + 1)}
                        >
                            <button
                                className={index === currentPage - 1 ? activeClass:defaultClass}
                            >
                                { index + 1 }
                            </button>
                        </li>
                    ))
                }

                <li className="next" >
                    <button
                        className={nextClass}
                        onClick={nextHandleClick}
                    >
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination