import { useParams, useSearchParams } from "react-router-dom"

function CityDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');
  const {cityId} = useParams();

  return (
    <div>City Details: {cityId}
      <div>lat: {latitude}</div>
      <div>long: {longitude}</div>
    </div>
  )
}

export default CityDetails