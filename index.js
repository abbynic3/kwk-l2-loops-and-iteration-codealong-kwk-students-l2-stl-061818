// Code your solutions in this file
function tailsNeverFails() {
  let tails = 0;
  
  while (Math.random() >= 0.01)
  tails++
}

  console.log(`You go ${tails} tails in a row!`);
}

tailsNeverFails();