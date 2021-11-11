import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import Categories from "./components/Categories/Categories";
import RandomMeal from "./components/RandomMeal/RandomMeal";
import Meal from "./components/Meal/Meal";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" active="active" element={<HomePage />}></Route>
            <Route exact path="/categories" active="active" element={<Categories />}></Route>
            <Route exact path="/random" element={<RandomMeal />}></Route>
            <Route exact path="/meal/:id" element={<Meal />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
