// the address of this server connected to the network is: 
// URL -> https://localhost:8383
// IP -> 127.0.0.1:8383

const express = require('express');
const app = express();
const PORT = 8383;

let data = ["Kshitij"]

// middleware
app.use(express.json())

// Endpoints - HTTP Verbs (methods/actions) and ROutes/Paths
// the method informs the nature of request and the route is a further subdirectory
// (basically we request the body of code to respond appropriately, and these locations and/or routes are called endpoints)

// Type 1- Website endpoints (these endpoints are basically for sending back html and they appear when a user enters a URL into a browser)
app.get('/', (req, res) => {
    // this is endpoint -1
    console.log('User requested home page', req.method);
    // res.sendStatus(201); // 200 series means  success, 400 series means client error, 500 means error on server side
    res.send(`
        <body style="background: black; color: #20C20E">
            <h1>
                DATA:
            </h1>
            <p>
                ${JSON.stringify(data)} <br/>
                <a href="/dashboard">
                    Dashboard
                </a>
            </p>
        </body>
        <script>console.log("This is my script");</script>
        `)
})

app.get('/dashboard', (req, res) => {
    console.log('dashboard endpoint hit', req.method);
    res.send(`
        <body style="background: black; color: #20C20E">
            <h1>
                Dashboard
            </h1><br/>
            <a href="/">
                Home
            </a>
        </body>
        `);
}
)

// Type 2- API endpoints (non-visual)

// CRUD-method : Create-post Read-Get Update-put Delete-delete

app.get('/api/data', (req, res) => {
    res.status(599).send(data);
});

app.post('/api/data', (req, res) => {
    // somebody wants to create a user (for example when they click a sign up button)
    // the user enters the sign up button after entering their credentials, and their browser is wired up 
    // to send out a network request to the server to handle that action
    const newEntry = req.body;
    console.log(newEntry);
    data.push(newEntry.name);
    res.sendStatus(201); // for creating necessary

}
);

app.delete('/api/data', (req, res) => {
    const ele = data[data.length - 1];
    data.pop();
    console.log(`we deleted ${ele} from the data`);
    res.sendStatus(203);
}
);


app.listen(PORT, () => {
    console.log(`Server has started on: Port ${PORT}`);
}
);