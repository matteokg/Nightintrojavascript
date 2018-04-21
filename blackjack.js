function advice (points) {
  if (points < 17) {
    console.log('hit!')
  }
  else if (17 < points && points < 21) {
    console.log('stay!')
  }
  else if (points === 21) {
    console.log('Blackjack')
  }
  else {
    console.log('Already Busted')
  }
}

var cardValue = {'a': 1, 'k': 10, 'q': 10, 'j': 10, '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2': 2}
var key = Object.keys(cardValue)

while (true) {
  var card1 = prompt('What is your first card? use 1 letter or number')
  var card2 = prompt('what is your second card?')
  if (cardValue[card1] && cardValue[card2]) break
  else console.log('not a valid input')
}

var cardValue1 = (cardValue[card1])
var cardValue2 = (cardValue[card2])
var points = cardValue1 + cardValue2

advice(points)
