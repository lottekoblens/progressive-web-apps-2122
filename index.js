const express = require(`express`);
const app = express();
const port = 3333;
const fetch = require('node-fetch');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.get('/scan', (req, res) => {
  res.render('scan');
})

app.get('/product', async (req, res) => {
  await fetch(`https://world.openfoodfacts.org/api/v0/product/${req.query.query}.json`)
    .then((res) => res.json())
    .then((data) => {

      if (data.status == 1) {
        res.render('product', {
          product: data.product
        });
      } else {
        res.redirect('/search');
      }
    });
});

app.get('/product/:barcode', async (req, res) => {
  const barcode = req.params.barcode
  await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.status == 1) {
        res.render('product', {
          product: data.product
        });
      } else {
        res.redirect('/search');
      }
    });
});

app.get('/offline', (req, res) => {
  res.render('offline')
})

app.use((req, res) => {
  res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});