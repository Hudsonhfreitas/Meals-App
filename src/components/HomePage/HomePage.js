import {useState, useCallback, useContext} from 'react';
import Container from '../Container/Container';
import { myContext } from '../context/context';
import './homePage.scss';


export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const { fetchHomePageMeals } = useContext(myContext);

    const fetchMealsHandler = useCallback(() => {
        fetchHomePageMeals(searchTerm);
    }, [searchTerm, fetchHomePageMeals])

    return (
        <div className="home">
            <Container>
                <div className="home-container">
                    <input type="text" placeholder="Type a meal" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                    <button onClick={fetchMealsHandler}>Seach Meal</button>
                </div>
                <div className="home-meals">

                </div>
            </Container>
        </div>
    )
}
