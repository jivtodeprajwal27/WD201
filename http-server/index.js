const http = require("http");
const fs = require("fs");
const args = process.argv.slice(2);

if (args.length !== 2 || args[0] !== "--port") {
  console.error("Usage: node index.js --port <port_number>");
  process.exit(1);
}

const port = parseInt(args[1]);

let homeContent = "";
let projectContent = "";
let registrationContent = ""; // Add this line

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
    if (err) {
      throw err;
    }
    projectContent = project;
  });

fs.readFile("registration.html", (err, registration) => {
      if (err) {
        throw err;
      }
      registrationContent = registration;
    });

http.createServer((request, response) => {
  let url = request.url;
  response.writeHead(200, { "Content-Type": "text/html" });
  switch (url) {
    case "/project.html":
      response.write(projectContent);
      response.end();
      break;
    case "/registration.html":
      response.write(registrationContent);
      response.end();
      break;
    default:
      response.write(homeContent);
      response.end();
      break;
  }
  }).listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  });
    
  



