import PropTypes from 'prop-types';
import Loader from '../components/loader';
import CityItem from '../components/CityItem';
import Message from '../components/Message';
import styles from './CitiesList.module.css'

function CitiesList({ cities, loading }) {
  CitiesList.propTypes = {
    cities: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  };

  if (loading) return <Loader />;

  if (!cities.length) return <Message message={"Cities data is not available"} />;

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.name} />
      ))}
    </div>
  );
}

export default CitiesList;
