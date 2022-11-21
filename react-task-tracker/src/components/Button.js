import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return ( 
    <button 
    style={{backgroundColor: color}}
    className= 'material-symbols-outlined btn'
    onClick={onClick}>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'red',
    text: 'button',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button