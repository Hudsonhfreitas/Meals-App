import { useParams } from "react-router"
import { useEffect, useContext, useState } from "react";
import { myContext } from "../context/context";
import Container from "../Container/Container";
import "./meal.scss";

export default function Meal() {
    const {id} = useParams();
    const {meals} = useContext(myContext);
    const [meal, setMeal] = useState([]);
   
    useEffect(() => {
        const currentMeal = meals.filter(item => item.idMeal === id)
        setMeal(currentMeal)
    }, [])
    
    return (
        <div className="meal">
            <Container>
                    {meal.map(meal => (
                        <div key={meal.strMeal} className="meal">
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
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
