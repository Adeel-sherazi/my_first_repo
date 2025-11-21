/**
 * My First JavaScript Program
 * A simple Hello World program to get started with JavaScript.
 */

/**
 * Greet someone by name.
 * @param {string} name - The name to greet. Defaults to "World".
 * @returns {string} A greeting message.
 */
function greet(name = "World") {
    return `Hello, ${name}!`;
}

/**
 * Main function to run the program.
 */
function main() {
    console.log(greet());
    console.log(greet("GitHub"));
    console.log(greet("Programmer"));
    
    // Try it with your own name!
    console.log("\nTry customizing the greeting:");
    console.log(greet("Your Name Here"));
}

// Run the program
main();
