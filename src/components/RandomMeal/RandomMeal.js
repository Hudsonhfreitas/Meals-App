import {useContext} from 'react';
import { useEffect } from 'react/cjs/react.development';
import Container from '../Container/Container';
import { myContext } from '../context/context';
import './randomMeal.scss';

export default function RandomMeal() {
    const {randomMeal, fetchRandom} = useContext(myContext);

    useEffect(() => {
        fetchRandom();
    }, [fetchRandom]);

    function handleNewRandom() {
        fetchRandom();
    }

    return (
        <div className="random">
            <Container>
                    {randomMeal.map(meal => (
                        <div key={meal.strMeal} className="meal">
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <button onClick={() => handleNewRandom()}>Get new meal</button>
                            <h4>{meal.strMeal}</h4>
                            <div className="instructions">
                                <h5>Instructions</h5>
                                <p>
                                    {meal.strInstructions}
                                </p>
                            </div>
                        </div>
                    ))
                    
                    }
                
            </Container>
        </div>
    )
}
