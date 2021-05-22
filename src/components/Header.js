import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand my-1 h1 navbar-title">{props.title}</a>
            </div>
        </nav>
    )
}
Header.defaultProps = {
    title: "Sticky Header"
}

Header.propTypes = {
    title: PropTypes.string
}