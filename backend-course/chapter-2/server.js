// the address of this server connected to the network is: 
// URL -> https://localhost:8383
// IP -> 127.0.0.1:8383

const express = require('express');
const app = express();
const PORT = 8383;

// HTTP Verbs and ROutes/Paths
// the method informs the nature of request and the route is a further subdirectory
// (basically we request the body of code to respond appropriately, and these locations and/or routes are called endpoints)
app.get('/', (req, res)=> {
    // this is endpoint -1
    console.log('yay, i hit an endpoint', req.method);
    res.sendStatus(201); // 200 series means  success, 400 series means client error, 500 means error on server side
})

app.get('/dashboard', (req, res) => {
  console.log('dashboard endpoint hit', req.method);
  res.send('hello world');
}
)

app.listen(PORT, () => {
  console.log(`Server has started on: Port ${PORT}`);
}
);