import MapContainer from "../components/MapContainer"
import Sidebar from "../components/Sidebar"
import styles from './AppLayout.module.css'
function AppLayout() {
  return (
    <div className={styles.appContainer}>
    <div>
      <Sidebar />
    </div>
    <div>
      <MapContainer />
    </div>
  </div>
    
  )
}

export default AppLayout