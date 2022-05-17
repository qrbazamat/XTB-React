import './style.css'

const Panel = ({ children, className, id }) => {
    return (
        <section className={`Panel ${className}`} id={id}>
            {children}
        </section>
    )
}

export default Panel