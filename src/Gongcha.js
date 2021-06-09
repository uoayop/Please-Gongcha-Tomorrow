import { useState, useRef } from "react";
import RecipeList from "./recipeList";
import Menus from "./menus";
import "./style/App.css";

function Gongcha() {
  const [drink, setdrink] = useState({
    name: "블랙밀크티",
    topping: "",
  });

  const { name, topping } = drink;

  const ChangeDrink = (props) => {
    const { name, value } = props;
    setdrink({
      ...drink,
      [name]: value,
    });
  };

  const [Recipes, setRecipes] = useState([
    
  ]);

  const nextId = useRef(1);

  const CreateRecipe = () => {
    const recipe = {
      id: nextId.current,
      name,
      topping,
    };
    setRecipes(Recipes.concat(recipe));
    nextId.current += 1;
  };

  const RemoveRecipe = (id) => {
    setRecipes(Recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div>
      <h3>당신의 공차는?!</h3>
      <span>{name}</span>
      <span> {topping === "" ? "" : "+ " + topping}</span>

      <button onClick={CreateRecipe}>좋아요</button>
      <br /><br />
      <Menus ChangeDrink={ChangeDrink} />
      <RecipeList recipes={Recipes} onRemove={RemoveRecipe} />
    </div>
  );
}

export default Gongcha;
