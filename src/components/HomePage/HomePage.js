import {useState, useCallback, useContext} from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import { myContext } from '../context/context';
import './homePage.scss';


export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const { fetchHomePageMeals, meals } = useContext(myContext);

    const fetchMealsHandler = useCallback(() => {
        fetchHomePageMeals(searchTerm);
    }, [searchTerm, fetchHomePageMeals])

    return (
        <div className="home">
            <Container>
                <div className="home-search">
                    <input type="text" placeholder="Type a meal" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                    <button onClick={fetchMealsHandler}>Search Meal</button>
                </div>
                <div className="home-grid">
                    {meals ? meals.map(meal => (
                        <div key={meal.idMeal} className="home-meals">
                            <Link to={`meal/${meal.idMeal}`}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <h4>{meal.strMeal}</h4>
                            </Link>
                        </div>
                    )) : <h2>No meals found! Try another word...</h2>}
                </div>
            </Container>
        </div>
    )
}
