import PropTypes from 'prop-types';
import Loader from '../components/loader';
import CityItem from '../components/CityItem';
import Message from '../components/Message';

function CitiesList({ cities, loading }) {
  CitiesList.propTypes = {
    cities: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  };

  if (loading) return <Loader />;

  if (!cities.length) return <Message message={"Cities data is not available"} />;

  return (
    <div>
      {cities.map((city) => (
        <CityItem city={city} key={city.name} />
      ))}
    </div>
  );
}

export default CitiesList;
