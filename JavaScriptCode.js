// Enhance each function and put comments 
// above each line of code explaining what is happening in your own words.

function displayWelcome() {
    document.write("<h2>Scroll down to land at the space port and enter the Casino!</h2>");
}
//displays a message in an h2 tag

function displayInstructions() {
    document.write("<br/><p>This is how you play....<br/>Refresh the page to roll the antigravity dice!</p><br/><p><p>You can't win if you don't play!</p><br/>");
}
//displays the text of instructions in a paragraph tag

function play() {
    var die1 = Math.ceil(Math.random() * 6);
    //rools a number between 1 and 6
    var die2 = Math.ceil(Math.random() * 6);
    // var die2 = Math.ceil(Math.random() * 12);//this needs to be a 6, it was a 12

    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    //these lines of code will displayed the numbers rolled and the sum of said numbers

    // if (sum == 8 || sum == 11) { needs to be 7 or 11 not 8 or 11
    if (sum == 7 || sum == 11) {
        document.write("You lose Space Cadet!")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win Space Ranger!")
        document.write("<br/>")
    }
    else {
        document.write("Roll again Space Cadet!")
        document.write("<br/>")
    }
    //if stament will check if you made doubles and if it can be divided evenly
}
