// Write the code that will log the output of 34 added to 71.
// console.log(34 + 71)
// Write the code that will log the output of 67 subtracted from 123.
// console.log(123 - 67)
// Write the code that will log the output of 56 multiplied by 23.
// console.log(56 * 23)
// Write the code that will log the output of 45 divided by 5.
// console.log(45 / 5)
// Write the code that will log the output of 5 to the power of 7.
// console.log(5 ** 7)
// Write the code that will log the whole number remainder of 33 divided by 6.
// console.log(33 % 6)
// Write the code that will log the length of a string containing your name.
// var firstName = "Alex"
// console.log(firstName.length)
// Write the code that will log whether your string includes the letter "e"?
// console.log(firstName.includes("e"))
// Write the code that will log the character at the first index of the string.
// console.log(firstName[0])
// Write the code that will log the string in all uppercase letters.
// console.log(firstName.toUpperCase())

// Consider the variables:

// const theQuestion = "life, the universe, and everything"
// const theAnswer = 42

// Write the code that will log theAnswer divided by 2.
// console.log(theAnswer / 2)
// Write the code that will log the whole number remainder of theAnswer when divided by 3.
// console.log(theAnswer % 3)
// Write the code that will log the length of theQuestion.
// console.log(theQuestion.length)
// Write the code that will log the length of theQuestion divided by 2.
// console.log(theQuestion.length / 2)
// Write the code that will log the length of theQuestion added to theAnswer.
// var theReason = theQuestion + theAnswer
// console.log(theReason.length)
// Write the code that will log the index of the character "f" in the theQuestion.
// console.log(theQuestion.indexOf("f"))
// Write the code that will log the index of the second comma in the theQuestion.
// console.log(theQuestion.lastIndexOf(","))
// Write the code that will log the concatenation of the two variables.
// console.log(theQuestion.concat(theAnswer))
// Write the code that will log the character "l" from theQuestion.
// console.log(theQuestion[0])
// Write the code that will extract "the universe" from theQuestion.
// console.log(theQuestion.slice(6,18))
// Write the code that will extract "everything" from theQuestion.
// console.log(theQuestion.slice(24))
// Write the code that will log the last character of theQuestion without manually counting the number of characters.
// console.log(theQuestion.charAt(theQuestion.length - 1))

// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
// console.log(34 / 3 > 67 / 2)
// // Does 5 evaluate to the same as "5"?
// console.log(5 == "5")
// // Does 5 strictly equal "5"?
// console.log(5 === "5")
// // Does !3 strictly equal 3?
// console.log(!3 === 3)
// // Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
// console.log("LEARN".length === 5 && "Student".length === 7)
// // Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
// console.log("LEARN".length === 5 || "Student".length === 10)
// // Does "LEARN" contain the subset "RN"?
// console.log("LEARN".includes("RN"))
// // Does "LEARN" contain the subset "rn"?
// console.log("LEARN".includes("rn"))
// // Does "LEARN"[0] strictly equal "l"?
// console.log("LEARN"[0] === "l")
// // Modify the code from the previous question to return true.
// console.log("LEARN"[0] === "L")

// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// var item = 100
// if (item <= 100){
//     console.log("in budget")
// }
// // Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// var appetite = "not hungry"
// if (appetite === "hungry"){
//     console.log("eat food")
// } else {
//     console.log("keep coding")
// }
// // Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// var trafficLight = "red"
// if (trafficLight === "green"){
//     console.log("go")
// } else if (trafficLight === "yellow"){
//     console.log("slow down")
// } else if (trafficLight === "red"){
//     console.log("stop")
// }
// // Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
// var num1 = 27
// var num2 = 46
// if (num1 > num2){
//     console.log(num1)
// } else if (num1 < num2){
//     console.log(num2)
// } else if (num1 = num2){
//     console.log("the numbers are the same")
// }
// // Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
// var num3 = 13
// if (num3 === 0){
//     console.log("zero")
// } else if (num3 % 2 === 0){
//     console.log("even")
// } else if (num3 % 2 !== 0){
//     console.log("odd")
// }

// Write a conditional statement for the following prompts.

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 100
if (grade === 0){
    console.log("no grade available")
} else if (grade === 100){
    console.log("perfect score")
} else if (grade < 100 && grade >= 90){
    console.log("A")
}  else if (grade < 90 && grade >= 80){
    console.log("B")
} else if (grade < 80 && grade >= 74){
    console.log("C")
} else if (grade < 74 && grade >= 70){
    console.log("D")
} else if (grade < 70 && grade > 0){
    console.log("F")
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var stuff = "hello"
console.log(typeof stuff)
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var password = "Thiscod"
if (password.length >= 12 && password.includes("!")){
    console.log("That is a mighty strong password!")
} else if (password.length >= 8 || password.includes("!")){
    console.log("That password is strong enough.")
} else {
    console.log("That is not a valid password.")
}