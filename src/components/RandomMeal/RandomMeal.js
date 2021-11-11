import {useContext} from 'react';
import { useEffect } from 'react/cjs/react.development';
import Container from '../Container/Container';
import { myContext } from '../context/context';

export default function RandomMeal() {
    const {randomMeal, fetchRandom} = useContext(myContext);

    useEffect(() => {
        fetchRandom();
        console.log(randomMeal)
    }, [fetchRandom]);

    return (
        <div className="random">
            <Container>
                    {randomMeal.map(meal => (
                        <div key={meal.strMeal} className="meal">
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <h4>{meal.strMeal}</h4>
                            <button>Get new meal</button>
                            <div className="instructions">
                                <h3>Instructions</h3>
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
