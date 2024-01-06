
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import PageNotFount from "./components/PageNotFount";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} />
          <Route path='app' element={<AppLayout />} >
            <Route index element={<div>Cities List</div>} />
            <Route path="cities" element={<div>Cities List</div>} />
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
