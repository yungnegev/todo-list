import PropTypes from 'prop-types'
import Button from './Button'

const Header = (prop) => {
    
    const onClick = (e)=> {
        console.log('onclicktest')
    }
  
    return (
    <header className='header'>
        <h1>{prop.title}</h1>
        <Button text='add' color='#FA9836' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header