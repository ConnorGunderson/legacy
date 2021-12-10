// Require Node's http module and assign it to a variable
const http = require("http"),
  { jokes, animals } = require("./assets"),
  _ = require("lodash");

// Create a new server that just says "Hi!!" at every route
const server = http.createServer((req, res) => {
  const { url } = req;
  try {
    switch (url) {
      case "/":
        res.statusCode = 200;
        res.end(`
          <h1>Welcome to the website</h1>
          <a href='/random-joke'><button>Joke</button></a>
          <a href='/cuteness'><button>Animal</button></a>
        `);
        break;
      case "/random-joke":
        const randomJoke = jokes[_.random(0, 2)];
        res.statusCode = 200;
        res.end(`
          <h1>Here is a random joke for ya</h1>
          <p>${randomJoke.setup}</p>
          <p>${randomJoke.punchline}</p>
          <a href="/">Back to Home Page</a>
        `);
        break;
      case "/cuteness":
        const randomAnimal = animals[_.random(0, 4)];
        res.statusCode = 200;
        res.end(`
          <h1>Here is a random joke for ya</h1>
          <img src="${randomAnimal}"/>
          <a href="/">Back to Home Page</a>
        `);
        break;
      default:
        res.statusCode = 404;
        res.end(`
          <h1>404 not found at ${url}</h1>
          <a href="/">Back to Home</a>
        `);
        break;
    }
  } catch (e) {
    console.log(e)
  }
});

// Listen on port 8080, so that we can reach the app at
// localhost:8080
const port = process.env.PORT || 8080;
server.listen(port);

// Output a friendly message to the terminal
console.log("Server running at http://localhost:" + port + "/");
