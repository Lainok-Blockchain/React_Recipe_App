import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './recipes';

const App = () => {
  const API_ID = "5746aef9";
  const APP_KEY ="8e9ea370b383698b299e52590adf89be";
 // const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')

 
  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    
  };

  const getSearch = e => {
    e.preventDefault(); // to stop the page refresh 
    setQuery(search);
    setSearch('') // to reset the input value 
  }; 

  return (
    <div className = 'App'>

      <form onSubmit={getSearch} className= "search-form">
        <input className="search-bar" type="text" value={search} placeholder="Type the recipe you want to see " onChange ={updateSearch} />
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
              {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients} />
      ))}
      </div>

      
    </div>
  );
};

export default App;
