var possibleAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes -definietly.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "As again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
]

var eightBallReply = possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)];

// randomizer test = failed
document.h1.innerText = eightBallReply;

#user-question.addEventListener('click', function emptyInputPlaceholder() {
  
})

}
