import { useState, useCallback, useRef } from "react";
import RecipeList from "./recipeList";
import "./App.css";

function Gongcha() {
  const [drink, setdrink] = useState({
    name: "블랙밀크티",
    topping: "",
  });

  const { name, topping } = drink;

  const ChangeDrink = useCallback(
    (props) => {
      console.log(props);
      const { name, value } = props;
      console.log(name, value);
      setdrink({
        ...drink,
        [name]: value,
      });
    },
    [drink]
  );

  const [Recipes, setRecipes] = useState([
    {
      id: 1,
      name: "우롱밀크티",
      topping: "코코넛",
    },
    {
      id: 2,
      name: "블랙밀크티",
      topping: "펄",
    },
  ]);

  const nextId = useRef(3);

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
      <h3>당신의 조합을 완성시켜보세요!</h3>
      <span>{name}</span>
      <span> { topping === "" ? "" : "+ " + topping}</span>

      <button onClick={CreateRecipe}>좋아요</button>
      <br />
      <br />
      <table>
        <tr>
          <th>메뉴</th>
          <td
            onClick={() => ChangeDrink({ name: "name", value: "블랙밀크티" })}
          >
            블랙 밀크티
          </td>
          <td
            onClick={() => ChangeDrink({ name: "name", value: "우롱밀크티" })}
          >
            우롱 밀크티
          </td>
          <td
            onClick={() => ChangeDrink({ name: "name", value: "그린밀크티" })}
          >
            그린 밀크티
          </td>
          <td
            onClick={() =>
              ChangeDrink({ name: "name", value: "얼그레이 밀크티" })
            }
          >
            얼그레이 밀크티
          </td>
        </tr>

        <tr>
          <th>토핑</th>
          <td onClick={() => ChangeDrink({ name: "topping", value: "펄" })}>
            펄
          </td>
          <td
            onClick={() => ChangeDrink({ name: "topping", value: "화이트펄" })}
          >
            화이트펄
          </td>
          <td onClick={() => ChangeDrink({ name: "topping", value: "코코넛" })}>
            코코넛
          </td>
          <td onClick={() => ChangeDrink({ name: "topping", value: "알로에" })}>
            알로에
          </td>
        </tr>
      </table>
      <RecipeList recipes={Recipes} onRemove={RemoveRecipe} />
    </div>
  );
}

export default Gongcha;
