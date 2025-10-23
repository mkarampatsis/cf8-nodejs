const fs = require('fs');
const http = require('http');
const os = require('os');

// Get the os type of our machine
osType = os.type();

// create html string
htmlContent = `
  <!DOCTYPE html>
  <html>
    <h3>Hello, World OS type is ${osType}</h3>
  </html>
`

const server = http.createServer((req, res)=>{
  // First we create the ondex.html file with htmlContent
  fs.writeFile('./index.html', htmlContent, err => {
    if(err) {
      console.log("Problem in writing file")
    } else {
      // Read file and send response
      fs.readFile('index.html', 'utf8', (err, content) =>{
        if (err) {
          console.log(err)
        } else {
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.end(content)
        }
      }) 
    }
  })
});

server.listen(3000, ()=>{
  console.log('Listening on port 3000');
})