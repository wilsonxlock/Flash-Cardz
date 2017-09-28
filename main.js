var clozeCard = require("./clozecard.js")
var basiccard = require("./basiccard.js")
var inquirer  = require ("inquirer")
var question1 = new clozeCard("The preamble is the introduction to the Constitution", "preamble", "The ... is the introduction to the constitution");
var question2 = new clozeCard("The bill of rights are the first ten ammendments to the constitution", "bill of rights","The ... are the first ten ammendments to the constitution" );
var question3 = new clozeCard("The Vice President is the leader of the senate", "senate", "The Vice President is the leader of the ...");
var first1 = new basiccard ("Who was the first President?", "george washington")
var first2 = new basiccard ("Which gun laws are infringements on the constitution?", "all of them")
var first3 = new basiccard ("What year were women granted the right to vote?", "1920")

var clozequestions = [
    question1,
    question2,
    question3
]
var basicquestions = [
    first1,
    first2,
    first3,
]
inquirer.prompt({
    type: "list",
    message: "What game do you want? ",
    name: "game",
    choices:["Cloze", "Basic"]
}).then(function(answers){
    if (answers.game == "Cloze") {
        askCloze();
    }
    else {
        askBasic()
    }
})
var count = 0
function askCloze() {
	inquirer.prompt([
		{
			type: "input",
            message: clozequestions[count].partial,
			name: "guess"
		}
	]).then(function (answers) {
		if (answers.guess == clozequestions[count].cloze) {
			console.log("Nice!");
		} else {
            console.log("Sorry, wrong answer!");
            console.log(clozequestions[count].fulltext);
		}
		if (count < clozequestions.length -1) {
			count++;
			askCloze();
		} else {
			console.log("Thanks for playing!")
            return
		}
	})
}
function askBasic() {
	inquirer.prompt([
		{
			type: "input",
            message: basicquestions[count].front,
			name: "guess"
		}
	]).then(function (answers) {
		if (answers.guess == basicquestions[count].back) {
			console.log("Nice!");
		} else {
            console.log("Sorry, wrong answer!");
            console.log(basicquestions[count].back);
		}
		if (count < basicquestions.length -1) {
			count++;
			askBasic();
		} else {
			console.log("Thanks for playing!")
            return
		}
	})
}
