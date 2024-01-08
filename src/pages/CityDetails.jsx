import { useParams } from "react-router-dom"

function CityDetails() {
  const {cityId} = useParams();

  return (
    <div>City Details: {cityId}</div>
  )
}

export default CityDetails