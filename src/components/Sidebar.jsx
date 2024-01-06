import { NavLink, Outlet } from 'react-router-dom'
import styles from './Sidebar.module.css'
function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div>
            <ul>
                <li><NavLink to="cities">Cities</NavLink></li>
                <li><NavLink to="countries">Countries</NavLink></li>
            </ul>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Sidebar