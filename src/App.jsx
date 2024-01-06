
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import PageNotFount from "./components/PageNotFount";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import CitiesList from "./pages/CitiesList";

function App() {
  const [cities, setCities] = useState('');
  const [loading, setLoading] = useState(false);
  const citiesUrl = 'http://localhost:9000/cities' 
async function fetchCities(){
  try {
    setLoading(true)
  let response = await fetch(citiesUrl)
  let cities = await response.json()
  setCities(cities);
} catch(e){
  console.log(e)
} finally {
  setLoading(false)
}
}
  useEffect(function(){
    fetchCities();
  })

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} />
          <Route path='app' element={<AppLayout />} >
            <Route index element={<CitiesList cities={cities} loading={loading} />} />
            <Route path="cities" element={<CitiesList cities={cities}  loading={loading}/>} />
            <Route path="countries" element={<div>Countries List</div>} />

          </Route>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
