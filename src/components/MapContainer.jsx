import { useNavigate, useSearchParams } from "react-router-dom";
function MapContainer() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');


  function showForm(){
    navigate('/app/addcity');
  }
  return (
    <div onClick={showForm}>
      lat: {latitude}
      long: {longitude}

      <button onClick={() => setSearchParams({
        lat: 1, long: 2
      })}>Change</button>
    </div>
  )
}

export default MapContainer