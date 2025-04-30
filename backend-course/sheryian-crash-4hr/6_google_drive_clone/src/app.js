import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index', { method: req.method });
}
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}.`);
}
);