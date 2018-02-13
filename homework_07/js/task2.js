let confirmation = confirm("Do you want to play the game?");

if(confirmation) {
    let maxRange = 5, count = 3, guess, prize = 10, currentPrize = prize, totalPrize = 0;
    let secretNumber = Math.floor(Math.random() * 1000000000)  %  maxRange;

    while(count > 0) {
        guess = +prompt("Enter a number from 0 to " + maxRange +
                         "\nAttempts left:" + count +
                         "\nTotal prize:" + totalPrize +
                         "\nPossible prize on current attempt:" + currentPrize, "");


         if(guess === secretNumber){
             let continueGame = confirm("Do you want to continue game?");
             totalPrize += currentPrize;
             if(continueGame){
                 maxRange *= 2;
                 secretNumber = Math.floor(Math.random() * 1000000000)  %  maxRange;
                 prize *= 3;
                 currentPrize = prize;
                 count = 3;
                 continue;
             } else {
                 console.log("Thank you for a game. Your prize is:" + totalPrize);
                 break
             }
         }

        if (count === 1 && guess !== secretNumber){
            console.log("Thank you for a game. Your prize is:" + totalPrize);
            let playAgain = confirm("Do you want to play again?");
            if(playAgain){
                maxRange = 5;
                count = 3;
                prize = 10;
                currentPrize = prize;
                totalPrize = 0;
                secretNumber = Math.floor(Math.random() * 1000000000)  %  maxRange;
                continue;
            } else {
                break;
            }
        }

        currentPrize = Math.floor(currentPrize / 2);
        count--;
    }

} else {
    console.log("You did not become a millionaire");

}
