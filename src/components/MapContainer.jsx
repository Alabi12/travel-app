import { useSearchParams } from "react-router-dom";
function MapContainer() {

  const [searchParams, setSearchParams] = useSearchParams();
  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');
  console.log(latitude);
  console.log(longitude);
  return (
    <div>
      lat: {latitude}
      long: {longitude}

      <button onClick={() => setSearchParams({
        lat: 1, long: 2
      })}>Change</button>
    </div>
  )
}

export default MapContainer