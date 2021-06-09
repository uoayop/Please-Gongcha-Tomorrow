import { TiDeleteOutline } from "react-icons/ti";

function Recipe({ recipe, onRemove }) {
  const { id, name, topping } = recipe;
  return (
    <div>
      <span>{name}</span>
      <span> {topping === "" ? "" : "+ " + topping}</span>
      <button onClick={() => onRemove(id)}>
        <TiDeleteOutline size="19"/>
      </button>
    </div>
  );
}

function recipeList({ recipes, onRemove }) {
  return (
    <>
      <h3>💛최애 조합💛</h3>
      {recipes.map((recipe, index) => (
        <Recipe recipe={recipe} key={recipe.id} onRemove={onRemove} />
      ))}
    </>
  );
}

export default recipeList;
