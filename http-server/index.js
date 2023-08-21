const args = require("minimist")(process.argv.slice(2));
const portNumber = args.port;
console.log(args.port); // prints the value of the --port option

const http = require("http");
const fs = require("fs");

let contentForHome = "";
let contentForProject = "";
let contentForRegistration = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  contentForHome = home;
});
fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  contentForRegistration = registration;
});
fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  contentForProject = project;
});
http.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(contentForProject);
        response.end();
        break;
      case "/registration":
        response.write(contentForRegistration);
        response.end();
        break;
      default:
        response.write(contentForHome);
        response.end();
        break;
    }
  })
  .listen(portNumber);
