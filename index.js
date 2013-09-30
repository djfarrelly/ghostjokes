var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000;

app.use(app.router);

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

var jokes = [
    { joke: "What is the ghost's secret to making hearty soups?", punchline: "Beef BOOOOOuilon cubes" }
  , { joke: "What did the ghost always try to throw away, but it always came back?", punchline: "A BOOOOmerang" }
  , { joke: "What is the ghost's favorite vacation spot?", punchline: "MaliBOOOOO" }
  , { joke: "Why did the ghost watch transformers?", punchline: "He loves Shia LaBOOOOeuf" }
  , { joke: "Why did the ghost hate his computer?", punchline: "He constantly had to reBOOOOt" }
];


function jokeView(req, res){

  var i = parseInt(req.params.i, 10) || 0;

  i = jokes[i] ? i : 0;

  res.render('index', {
      index: i
    , next: i + 1
    , joke: jokes[i].joke
    , punchline: jokes[i].punchline
  });

}

app.get('/', jokeView);
app.get('/:i', jokeView);

app.listen(port);