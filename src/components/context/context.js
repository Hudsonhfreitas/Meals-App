import { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export default function AppContext({children}) {
    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [randomMeal, setRandomMeal] = useState([]);

    const fetchHomePageMeals = useCallback((searchTerm) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response => console.log(response.data.meals))
    },[])
    return (
        <myContext.Provider value={{fetchHomePageMeals}}>
            {children}
        </myContext.Provider>
    )
}