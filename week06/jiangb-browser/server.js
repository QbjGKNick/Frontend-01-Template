const http = require('http')

// Returns content-type = text/plain
const server = http.createServer((req, res) => {
  console.log('--------------start------------------')
  // console.log("req", req)
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/html', 'Charset': 'utf-8' });
  res.end(`<html lang="zh">
  <head>
    <style>
  
      body div .img{
            width:30px;
            background-color: #ff1111;
        }
      body div .img{
          width:120px;
          height: 100px;
          background-color: red;
      }
      .box {
        width: 100px;
        height: 200px;
        background-color: blue;
      }
      div.box2#box2 {
        width: 50px;
        height: 40px;
        background-color: green;
      }
    
          </style>
  </head>
  <body>
    <div>
      <img class="img"/>
      <img />
      <div id="box" class="box" style="width: 120px; height: 20px;">123</div>
      <div id="box2" class="box2">box2</div>
  </div>
  </body>
  </html>`);
});

server.listen(8088)
