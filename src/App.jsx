
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import CitiesList from "./pages/CitiesList";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const citiesUrl = 'http://localhost:9000/cities';

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true);
        let response = await fetch(citiesUrl);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        let citiesData = await response.json();
        setCities(citiesData);
      } catch (error) {
        console.log(error);
        // Handle error, you may want to set an error state here if needed
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []); 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} />
          <Route path='app' element={<AppLayout />}>
            <Route index element={<CitiesList cities={cities} loading={loading} />} />
            <Route path="cities" element={<CitiesList cities={cities} loading={loading} />} />
            <Route path="countries" element={<div>Countries List</div>} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
