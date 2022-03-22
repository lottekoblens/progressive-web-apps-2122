const express = require(`express`);
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  res.render('home');
});

app.get('/barcode', async (req, res) => {
  res.render('barcode');
});

app.get('/product', async (req, res) => {
  await fetch(`https://world.openfoodfacts.org/api/v0/product/${req.query.query}.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.status == 1) {
        res.render('product', {
          product: data.product
        });
      } else {
        res.redirect('/barcode');
      }
    });
});

app.use((req, res) => {
  res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});