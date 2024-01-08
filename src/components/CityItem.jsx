import PropTypes from 'prop-types';
import styles from './cityItem.module.css';
import { Link } from 'react-router-dom';

function CityItem({city}) {
  CityItem.propTypes = {
    city: PropTypes.object.isRequired
  }
  return (
    <Link to={`/app/cities/${city.id}?lat=${city.latitude}&long=${city.longitude}`} className={styles.cityLink}>
    <div className={styles.city}>
      <div className='d-flex align-items-center'>
        <div>{city.emoji_flag}</div>
      </div>
        <div>{city.name}</div>
      <div>
        <button className={styles.deleteButton}>&times;</button>
      </div>
    </div>
    </Link>
  )
}

export default CityItem