import { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export default function AppContext({children}) {
    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [randomMeal, setRandomMeal] = useState([]);

    const fetchHomePageMeals = useCallback((searchTerm) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response => {
            setMeals(response.data.meals)
        })
    },[])

    const fetchCategories = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response => setCategories(response.data.categories))
    },[])

    const fetchRandom = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => setRandomMeal(res.data.meals))
    },[])

    return (
        <myContext.Provider value={{fetchHomePageMeals, fetchCategories, fetchRandom, categories, meals, randomMeal}}>
            {children}
        </myContext.Provider>
    )
}