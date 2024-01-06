import PropTypes from 'prop-types';
import styles from './cityItem.module.css';

function CityItem({city}) {
  CityItem.propTypes = {
    city: PropTypes.object.isRequired
  }
  return (
    <div className={styles.city}>
      <div className='d-flex align-items-center'>
        <div>{city.emoji_flag}</div>
      </div>
        <div>{city.name}</div>
      <div>
        <button className={styles.deleteButton}>&times;</button>
      </div>
    </div>
  )
}

export default CityItem