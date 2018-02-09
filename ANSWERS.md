# Scope and Context

1. Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.
```
printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}
```
ANSWER:<br>
JS has a "two pass" process when reading code, 1) the compile phase, and 2) the execution phase. Hoisting is when Variable and function declarations are put into memory during the compile phase, but stays exactly where you typed it in your coding.

2. Explain why this function called printGoodbye can't be executed until after it's actually written in the file.
```
printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();
```
ANSWER:
The way that JS reads the fat arrow function prohibits function to be "hoisted" during the compile phase.
