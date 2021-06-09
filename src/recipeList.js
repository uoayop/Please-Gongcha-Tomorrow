function Recipe({recipe}){
    const {name, topping} = recipe;
    return(
        <>
            <b>{name}</b>
            <span>{topping}</span>
        </>
    )
}

function recipeList({recipes}){
    console.log(recipes);
    return(
        <>
        {
            recipes.map((recipe,index)=>(
                <Recipe
                    recipe = {recipe}
                    key = {index}
                />
            ))
        }
        </>
    )
}

export default recipeList;