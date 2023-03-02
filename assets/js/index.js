
// A user can enter a number
// The system picks a random number from 1 to 6
// If the user's number is equal to a random number, give the user 2 points
// If the user's number is different than the random number by 1, give the user 1 point. Otherwise, give the user 0 points
// The user can play the game as long as they want to


const enterInput = () => {
  return new Promise((resolve, reject) => {

    userInput = prompt("Enter the Number between 1-6");
    //Random num calculation
    randomNumber = Math.floor(Math.random() * 6 + 1);

    // check if it is a number
    if (isNaN(userInput)) {
      reject(alert("Not a Number"));
    }

    if (userInput === randomNumber) {
      resolve({
        point: 2,
        randomNumber,
      });
    } 
    else if (userInput === randomNumber - 1 || userInput === randomNumber + 1) {
      resolve({
        point: 1,
        randomNumber,
      });
    } 
    else {
      resolve({
        point: 0,
        randomNumber,
      });
    }
  });
};

// game continue 
const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to continue?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};
//async and await
const runGame = async () => {
    try{
        const result = await enterInput();
    alert(`You got ${result.point} point and your Random Number is ${randomNumber}`);

    const onGoing = await continueGame();
    if(onGoing){
        runGame();
    }else{
        alert("Game ended");
    }
    }
    catch(error){
        alert(error);
    }

};
runGame();








