import { Link } from "react-router-dom";
import {nav} from './AppNav.module.css'

function AppNav() {
  return (
    <nav className={nav}>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
    </nav>
  )
}

export default AppNav