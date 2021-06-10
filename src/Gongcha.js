import { useState, useRef } from "react";
import RecipeList from "./recipeList";
import { AiOutlineHeart } from "react-icons/ai";
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

  const [Recipes, setRecipes] = useState([]);

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
      <div className="content-wrapper">
        <div className="selector">
          <h3>당신의 공차는?!</h3>
          <Menus ChangeDrink={ChangeDrink} />
          <span>
            {name}
            {topping === "" ? "" : "+ " + topping}
            <button onClick={CreateRecipe}>
              <AiOutlineHeart size="19" />
            </button>
          </span>
        </div>
        <div className="recipes">
          <h3>💛최애 조합💛</h3>
          <div className="recipeList">
            <RecipeList recipes={Recipes} onRemove={RemoveRecipe} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gongcha;
