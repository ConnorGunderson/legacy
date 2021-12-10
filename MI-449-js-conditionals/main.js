/* eslint-disable no-unmodified-loop-condition */
let consent = false
let userScore = 0
let botScore = 0
let userChoice, botChoice, botWin, userWin
let userWins = 0
let botWins = 0
let gameEnd = false
const options = ['rock', 'paper', 'scissors']

// selects a random RPS choice for the bot each round
const getBotChoice = () => {
  return options[Math.floor(Math.random() * Math.floor(3))]
}

// gets the winner for the current round
const getWinner = (player) => {
  if (player === 'bot') {
    botWin = true
    userWin = false
    return botScore++
  } else if (player === 'user') {
    userWin = true
    botWin = false
    return userScore++
  }
}

// check to see if the player would like to play again
const playAgain = (player) => {
  let playAgain
  switch (player) {
    case 'bot':
      botWins++
      playAgain = confirm(
        `The bot has won, The current score is
      \nBot:${botWins} User:${userWins}
      \nplay again?`
      )
      break
    case 'user':
      userWins++
      playAgain = confirm(`You have won, The current score is
      \nBot:${botWins} User:${userWins}
      \nplay again?`)
      break
  }
  if (playAgain) {
    userScore = 0
    botScore = 0
  } else if (!playAgain) {
    alert(`The final score was:
    \n Bot:${botWins} User:${userWins}
    \nPlay again soon!
    `)
    gameEnd = true
  } else if (botWins === 3 || userWins === 3) {
    // if the user or bot has won 3 matches, the game ends
    alert(`You have reached the maximum number of allowed matches
    \nThe final score was:
    \nBot:${botWins} User:${userWins}
    \nPlay again soon!
    `)
    gameEnd = true
  }
}

// main script
while (!gameEnd) {
  // check to see if the user consents to playing a game of RPS
  if (consent) {
    // user plays until the bot or user gets a score of 2
    while (userScore < 2 && botScore < 2) {
      userChoice = prompt('Rock, Paper or Scissors?')
      if (userChoice) {
        userChoice = userChoice.toLowerCase()
      }
      if (userChoice === 'scissor') {
        userChoice = 'scissors'
      }
      botChoice = getBotChoice()
      switch (userChoice) {
        case 'rock':
          botChoice === 'scissors'
            ? getWinner('user')
            : botChoice === 'paper' && getWinner('bot')
          break
        case 'paper':
          botChoice === 'rock'
            ? getWinner('user')
            : botChoice === 'scissors' && getWinner('bot')
          break
        case 'scissors':
          botChoice === 'paper'
            ? getWinner('user')
            : botChoice === 'rock' && getWinner('bot')
          break
        default:
          userChoice = 'INVALID CHOICE'
          getWinner('bot')
          break
      }
      alert(`You chose ${userChoice}, and the bot chose ${botChoice}.
      \n${
        botWin
          ? 'The bot has won'
          : userWin
          ? 'You have won'
          : 'This round was a tie'
      }
      \nCurrent Score:
      \nBot: ${botScore} User: ${userScore}
      `)
    }
    if (userScore === 2) {
      playAgain('user')
    } else {
      playAgain('bot')
    }
  } else {
    consent = confirm('Would you like to play rock paper scissors?')
  }
}
