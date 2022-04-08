const compression = require('compression');
const express = require(`express`);
const env = require('dotenv')
const app = express();
const PORT = process.env.PORT || 3333;
const fetch = require('node-fetch');

app.use(express.static('public'));
app.use(compression());
app.set('view engine', 'ejs');


// save in cache
app.use(/.*-[0-9a-f]{10}\..*/, (req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=31536000, immutable');
  next();
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.get('/scan', (req, res) => {
  res.render('scan');
})

app.get('/noproduct', (req, res) => {
  res.render('noproduct');
})

// on product page do fetch with the query that comes from the input field from the search page
app.get('/product', async (req, res) => {
  await fetch(`https://world.openfoodfacts.org/api/v0/product/${req.query.query}.json`)
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 1) {
        res.render('product', {
          product: data.product
        });
      } else {
        res.redirect('/noproduct');
      }
    });
});

// on product:barcode page do fetch with the params that comes from the barcode scanner
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
        res.redirect('/noproduct');
      }
    });
});

// when the user is offline and comes on a page that isn't stored in the cache -> the offline page will be rendered
app.get('/offline', (req, res) => {
  res.render('offline')
})

app.use((req, res) => {
  res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});