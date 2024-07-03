import inquirer from "inquirer";
let reverseString = async () => {
    const str = await inquirer.prompt([
        {
            name: "STR",
            message: "Give me a word",
            type: "input",
        },
    ]);
    return str.STR.split('').reverse().join();
};
reverseString();
