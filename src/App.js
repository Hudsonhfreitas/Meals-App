import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import Categories from "./components/Categories/Categories";
import RandomMeal from "./components/RandomMeal/RandomMeal";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/categories" element={<Categories />}></Route>
            <Route exact path="/random" element={<RandomMeal />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
