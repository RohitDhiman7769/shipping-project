import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='sidenav-bar'>
            {/* // <div style={{padding :'2em'}}> */}
            <Link to='/Home' className='links' > Home</Link>
            <Link to='/Wall' className='links'>Wall</Link>
            <Link to='/Search' className='links'>Search</Link>
            <Link to='/Cart' className='links'>Cart</Link>
            <Link to='/Notification' className='links'>Notification</Link>
            <Link to='/Profile' className='links'>Porfile</Link>
            <Link to='/Setting' className='links'>Setting</Link>
            {/* </div> */}
        </div>
    );
}


export default Navbar;