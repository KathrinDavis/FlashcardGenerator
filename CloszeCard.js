


var CreateCard = function(text, cloze){
 	console.log("There's an error!");
 	this.printCloze= function(){
 		console.log(this.cloze);
 	}
 	this.printPartial= function(){
 		console.log(this.partial);
 	}
 	this.printFull = function(){
 		console.log(this.fullText);
 	}

 	var algorithm = new ClozeCard(
	"Algorithm is a precise sequence of instructions for successfully carrying out a task.It will be written in everyday language but the steps might be capable of translation into a programming language. There might be a number of workable algorithms for a task but not all will be as efficient as the others.",
	 "Algorithm");
 	console.log(algorithm.cloze);
 	console.log(algorithm.partial);
 	console.log(algorithm.fullText);

 	var brokenCloze = new ClozeCard("This doesn't work", "oops");
 // 	if (input != this.cloze){
 // 		console.log("Error! Cloze deletion doesn't apear in input text.");
	// {
	// 	cloze: "GW"
	// 	partial: "is the 1st POTUS."
	// 	fullText: "GW is the 1st POTUS."
	// }
	// }
}
module.exports = ClozeCard;