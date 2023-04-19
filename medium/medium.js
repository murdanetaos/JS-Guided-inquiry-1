function checker(str) {
    if (str === str.toUpperCase()) {
      console.log("Why are you shouting?");
    } else if (str === str.toLowerCase()) {
      console.log("Why are you whispering?");
    } else {
      console.log("You are speaking normally.");
    }
  }
  
  const userInput = prompt("Please enter something:");
  checker(userInput);