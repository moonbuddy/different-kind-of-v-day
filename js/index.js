let iLikeMyMen = ['vanilla ice cream--white, sweet, satisfying,', 
'foot rubs--gentle, relaxing,',
'breakfast--hot, meaty,',
'sales--big, long-lasting,',
'cats--loud, feisty,',
'trees--tall, woody,',
'Mily Mae scrap boxes--full of surprise,',
'massages--long, deep,',
'vacations--long, relaxing,',
'computer--Does what I tell it to, reads my mind,',
'car--functional',
'tv shows--funny, last for years,',
'phone--working, handy, helpful,',
'Megabytes--spicy, sweet, sometimes on Saturdays,', 
'memes--funny, slightly inappropriate,',
'donuts--squishy, sweet,',
'drinks--strong, smooth,']

const jessSays = document.getElementById("jessSays")

document.getElementById("btn").addEventListener('click', getRandomQuote)

function getRandomQuote() {
  let randomQuoteIndex = Math.floor(Math.random() * iLikeMyMen.length)
  let randJessQuote = iLikeMyMen[randomQuoteIndex]
  jessSays.innerHTML = `I like my men like I like my ${randJessQuote} and UNABLE TO GET ME PREGNANT!`
}