const net = require('net');

class Request {
    // method, url = host + port + path
    // body: key/value
    // headers
    constructor(options){
        this.method = options.method || 'GET';
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || "/";
        this.body = options.body || {};
        this.headers = options.headers || {};

        const contentType = this.headers["Content-Type"]
        if (!contentType) {
            contentType = "application/x-www-form-urlencoded";
        }
        if (contentType === "application/json") {
            this.bodyText = JSON.stringify(this.body);
        } else if (contentType === "application/x-www-form-urlencoded") {
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
        }

        this.headers["Content-Length"] = this.bodyText.length;
    }
    toString() {
        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(headers).map(key => `${key}: ${this.headers[key]}`).join('&')}\r
\r
${this.bodyText}`
}
    open(method, url) {

    }
    send(connection) {
        if (connection) {
            connection.write(this.toString())
        } else {
            connection = net.createConnection({
                host: this.host,
                port: this.port
            }, () => {
                connection.write(this.toString())
            })
        }
        connection.on('data', data =>{
            resolve(data.toString());
            connection.end()
        })
        connection.on('error', err =>{
            reject(err);
            connection.end()
        })
    }
}

class Response {

}

class ResponseParser {
    constructor() {
        this.WAITING_STATUS_LINE = 0;
        this.WAITING_STATUS_LINE_END = 1;
        this.WAITING_HEADER_NAME = 2;
        this.WAITING_HEADER_VALUE = 3;
        this.WAITING_HEADER_VALUE_END = 4;
        this.WAITING_HEADER_BLOCK_END = 5;
        this.WAITING_BODY = 6;

        this.current = this.WAITING_STATUS_LINE;
        this.statusLine = "";
        this.headers = {};
        this.headerName = "";
        this.headerValue = ""
    }
    receive(string) {
        for(let i = 0, len = string.length; i < len; i++) {
            this.receiveChar(string.charAt[i]);
        }
    }
    receiveChar(char) {
        if (this.current === this.WAITING_STATUS_LINE) {
            if (char === '\r') {
                this.current = this.WAITING_STATUS_LINE_END;
            } else {
                this.statusLine += char
            }
        }
    }
}

class TrunkBodyParser {
    consturctor(){

    }
}

void async function(){
    let request = new Request({
        method: "POST",
        host:"127.0.0.1",
        path:'/',
        port:"8088",
        headers:{
            ["foo"]: 'bar'
        }
    })
}

const client = net.createConnection({ 
    host:'127.0.0.1',
    port: 8088 }, () => {
  // 'connect' listener.
  console.log('connected to server!');
//   client.write('world!\r\n');
    let request = new Request({
        method:'POST',
        host: "127.0.0.1",
        port:"8088",
        path:"/",
        body:{
            name: "winter"
        }
    })

    conosole.log(request.toString())
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});