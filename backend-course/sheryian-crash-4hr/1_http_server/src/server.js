import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url);
    const met = req.method;
    console.log(`User sent a ${met} request`);
    if (req.url=="/about")
    {
        res.end(`
            <head><title>About Page</title></head>
            <h2>about page</h2>`);
    }
    if (req.url=="/profile")
        {
            res.end(`
                <head><title>Profile Page</title></head>
                <h2>profile page</h2>`);
        }
    if (req.url=="/")
    {
        res.end(`
            <head><title>Home Page</title></head>
            <h1>Hello world! Welcome to home Page! Method is ${met}</h1>`);
    }
    

})

const PORT = 5003;

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
}
)