const express = require('express');
const path = require('path');
const axios = require('axios');
const { Authorization } = require('../apikey');

const app = express();
const PORT = 3000;
const DIST_DIR = path.join(__dirname, '../client/dist');

app.use(express.static(DIST_DIR));

const headers = { Authorization };
const config = { headers };

// returns all products
app.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', config)
    .then((result) => { res.send(result.data); });
});

// returns product level information for a specific product id
app.get('/products/:id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}`, config)
    .then((result) => { res.send(result.data); })
    .catch(() => res.sendStatus(500));
});

// --- For Related Items ---
app.get('/products/:id/related', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}/related`, config)
    .then((result) => res.send(result.data))
    .catch(() => res.sendStatus(500));
});

app.get('/products/:id/relatedinfo', (req, res) => {
  const axiosrequest1 = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}`, config);
  const axiosrequest2 = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}/styles`, config);

  axios.all([axiosrequest1, axiosrequest2])
    .then(axios.spread((res1, res2) => {
      const tempObj = { ...res1.data, thumbnail: res2.data.results[0].photos[0].thumbnail_url };
      // res.send([res1.data, res2.data.results[0].photos[0].thumbnail_url]);
      res.send([tempObj]);
    }))
    .catch(() => res.sendStatus(500));
});

// returns all the styles available for the given product
app.get('/products/:id/styles', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}/styles`, config)
    .then((result) => { res.send(result.data); })
    .catch(() => res.sendStatus(500));
});

// app.get('/reviews', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', params)
//     .then((result) => { res.send(result.data); });
// });

// app.get('/questions', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', params)
//     .then((result) => { res.send(result.data); });
// });

// app.get('/user-cart', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', params)
//     .then((result) => { res.send(result.data); });
// });

app.listen(PORT, () => { console.log(`Listening to port ${PORT}`); });
