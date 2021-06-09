function Recipe({recipe}){
    const {name, topping} = recipe;
    return(
        <div>
            <b>{name}</b> + 
            <span>{topping}</span>
        </div>
    )
}

function recipeList({recipes}){
    console.log(recipes);
    return(
        <>
        <h3>최애 조합 </h3> 
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