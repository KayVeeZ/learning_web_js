// the address of this server connected to the network is: 
// URL -> https://localhost:8383
// IP -> 127.0.0.1:8383

const express = require('express');
const app = express();
const PORT = 8383;

let data = {
    name: "Kshitij"
}

// Endpoints - HTTP Verbs (methods/actions) and ROutes/Paths
// the method informs the nature of request and the route is a further subdirectory
// (basically we request the body of code to respond appropriately, and these locations and/or routes are called endpoints)

// Type 1- Website endpoints (these endpoints are basically for sending back html and they appear when a user enters a URL into a browser)
app.get('/', (req, res) => {
    // this is endpoint -1
    console.log('yay, i hit an endpoint', req.method);
    // res.sendStatus(201); // 200 series means  success, 400 series means client error, 500 means error on server side
    res.send('<h1>Homepage</h1>')
})

app.get('/dashboard', (req, res) => {
    console.log('dashboard endpoint hit', req.method);
    res.send('<h1>Dashboard</h1>');
}
)

// Type 2- API endpoints (non-visual)

app.get('/api/data', (re,res) => {
    res.send(data);
});


app.listen(PORT, () => {
    console.log(`Server has started on: Port ${PORT}`);
}
);