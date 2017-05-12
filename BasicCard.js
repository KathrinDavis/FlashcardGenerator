
var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
}

BasicCard.prototype.Card = function(){
	console.log("Question: " +this.front+ "\nAnswer: "+this.back);
}

BasicCard.prototype.Front = function(){
	console.log(this.front);
}
BasicCard.prototype.Back = function(){
	if (guess === this.back){ 
		console.log("You guessed correctly: "+ this.back)
	}else{
		console.log("Nope, the answer is: "+ this.back)
	}
}

var algorithm = new BasicCard(
	"a precise sequence of instructions for successfully carrying out a task.It will be written in everyday language but the steps might be capable of translation into a programming language. There might be a number of workable algorithms for a task but not all will be as efficient as the others.",
	 "Algorithm");
	console.log( algorithm.front); 
	console.log(algorithm.back);



module.exports = BasicCard;