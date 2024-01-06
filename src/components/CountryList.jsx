import PropTypes from 'prop-types';
import CountryItem from './CountryItem';
import Loader from './loader';
import styles from './CountryList.module.css';

function CountryList({ cities = [], loading }) {
  CountryList.propTypes = {
    cities: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  };

  if (loading) return <Loader />

  // Check if 'cities' is defined and is an array
  if (!cities || !Array.isArray(cities)) {
    console.error('Invalid or missing cities array.');
    return ""; // or handle this case appropriately based on your requirements
  }

  // Use 'reduce' safely
  let countries = cities.reduce((arr, curr) => {
    if (!arr.map((el) => el.country).includes(curr.country)) {
      return [...arr, { country: curr.country, emoji_flag: curr.emoji_flag }];
    } else {
      return arr;
    }
  }, []);
  return (
    <div className={styles.countryList}>
      {countries.map(country => <CountryItem country={country} key={country.country} />)}
    </div>
  );
}

export default CountryList;
