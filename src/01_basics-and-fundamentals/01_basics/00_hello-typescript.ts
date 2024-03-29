/**
 * The traditional first line of code in any programming language
 */

/**
 * Declare a function called 'functionName' that takes a parameter called 'str' that is of type 'String'
 * The function will have a default value of "TypeScript" if no parameter is passed in
 */

(() => {
    const greeting = (parameterVariable: string = 'TypeScript') => {
        console.log(`Hello, ${parameterVariable}`);
    };

    greeting();
    greeting('World');
})();
