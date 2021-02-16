// your age in days!

function ageInDays(){
    var birthYear = prompt("what year were you born?");
    var currentYear = prompt("which year is it?");
    var ageInDayss = ((currentYear - birthYear) *365);
    // console.log(ageInDayss);
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDayss + " days old.");
    h1.setAttribute("id","ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById("ageInDays").remove();
}