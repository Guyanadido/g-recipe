import { useParams, Link } from "react-router-dom";
import data from "./data";
import "./RecipeDetail.css"

const RecipeDetail = (recipeID) => {
    const { id } = useParams();
    const recipe = data.find((recipe) => recipe.id === id);
    
    if (!recipe) {
        return <h2>Recipe not found</h2>;
    }
    
    return (
        <div className="recipe-detail">
        <Link to="/">Back to Recipes</Link>
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        <h2>{recipe.name}</h2>
        <ul>
            {recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
            ))}
        </ul>
        <p>{recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetail