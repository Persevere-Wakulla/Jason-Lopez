import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <nav>
            <ul  className='nav-bar'>
                <li>
                    <NavLink to="/"> Earth</NavLink>
                </li>
                <li>
                    <NavLink to="/mercury"> Mercury</NavLink>
                </li>
                <li>
                    <NavLink to="/jupiter">Jupiter</NavLink>
                </li>
                <li>
                    <NavLink to="/mars"> Mars</NavLink>
                </li>
                <li>
                    <NavLink to="/neptune"> Neptune</NavLink>
                </li>
                <li>
                    <NavLink to="/saturn"> Saturn</NavLink>
                </li>
                <li>
                    <NavLink to="/uranus"> Uranus</NavLink>
                </li>
                <li>
                    <NavLink to="/venus"> Venus</NavLink>
                </li>
            </ul>
        </nav>
    )
}