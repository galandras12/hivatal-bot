require('console-inject');

var facts = ['WORK!', 'Work! Fine!', 'Work! Here a random message!', 'Still work!', 'Work again!', 'Work? Yes!', 'The app answer to you!', 'App: run...', 'Test status: Perceft!', 'One more random message', 'Work because created by Andrew Gal.', 'No problem!', 'A message', 'If not need more just press CTRL+C', 'now try node index.js', 'now try npm start', 'Need more text?', 'not enough?']
setInterval(function() {
  var fact = Math.floor(Math.random() * facts.length)
  console.log(facts[fact]); // Every 1 sec, this will return a _new random_ fact
}, 1*1000)