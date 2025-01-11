const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // makes files in public folder public

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About us');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us');
});

app.get('/blog', (req, res) => {
  res.send('Our Blog');
});

app.get('/blog/:slug', (req, res) => {
  // logic to fetch {slug} from db
  // for URL http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
  console.log(req.params); // will output {slug: intro-to-padosi}

  console.log(req.query); // will output { mode: 'dark', region: 'in' }

  res.send(`Hello ${req.params.slug}`);
});

app.get('/blog/:slug/:second', (req, res) => {
  // logic to fetch {slug} from db
  // For URL: http://localhost:3000/blog/intro-to-padosi/second?mode=dark&region=in
  console.log(req.params); // will output { slug: 'intro-to-padosi', second: 'second' }

  console.log(req.query); // will output { mode: 'dark', region: 'in' }

  res.send(`Hello ${req.params.slug} and ${req.params.second}`);
});


// app.get('/blog/intro-to-js', (req, res) => {
//   // logic to fetch intro to js from db
//   res.send('Java Script');
// });

// app.get('/blog/intro-to-python', (req, res) => {
//   // logic to fetch intro to python from db
//   res.send('Python');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
      