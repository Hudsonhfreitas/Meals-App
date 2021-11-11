import React, { useEffect, useContext} from 'react';
import Container from '../Container/Container';
import { myContext } from '../context/context';
import "./categories.scss";

export default function Categories() {

    const {fetchCategories, categories} = useContext(myContext);

    useEffect(() => {
        fetchCategories();
    },[fetchCategories])

    return (
        <div className="categories">
            <Container>
                {categories.map(category => (
                    <div className="category" key={category.idCategory}>
                        <img src={category.strCategoryThumb} alt={category.strCategory}></img>
                        <h4>{category.strCategory}</h4>
                    </div>
                ))}
            </Container>
        </div>
    )
}
