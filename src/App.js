import './App.css';
import {useState} from 'react'
import RecipeCard from './components/RecipeCard';
import './components/RecipeCard.css'
import recipes from "./data";

import SearchBar from './SearchBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RecipeDetail from './RecipeDetail';


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredRecipes = recipes.filter((recipe) => {
    const lowerSearch = searchTerm.toLowerCase();
    const nameMatch = recipe.name.toLowerCase().includes(lowerSearch);
    const ingredientMatch = recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(lowerSearch)
    );
    return nameMatch || ingredientMatch;
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <div className="recipe-list">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        }/>
        <Route path="recipe/:id" element={<RecipeDetail />} />
      </Routes>
      </Router>
  );
}

export default App;

