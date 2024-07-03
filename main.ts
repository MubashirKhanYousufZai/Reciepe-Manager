import inquirer from "inquirer";

let main = async () => {
    await addRecipe();

    await time();
}
let recipe :string[] = [];

let addRecipe = async () => {
    let newRecipe = await inquirer.prompt([
        {
            name: "new",
            message: "Add the recipe of the food you want to it.",
            type: "input",
        },
    ]);

    recipe.push(newRecipe.new);
    console.log(`${newRecipe.new} is saved in your recipe list.`)
}

let time = async () => {
    let recipeTime = await inquirer.prompt([
        {
            name: "Time",
            message: "The recipe you are making is for Breakfast , Lunch or Dinner?🧐",
            type: "list",
            choices: ["Break Fast" , "Lunch" , "Dinner"],
        },
    ]); 
    
    console.log(`Your recipe is for ${recipeTime.Time}`);
}

main();
