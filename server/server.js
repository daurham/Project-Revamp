const express = require('express');
const path = require('path');
const axios = require('axios');
const { Authorization } = require('../apikey');

const app = express();
const PORT = 3000;
const DIST_DIR = path.join(__dirname, '../client/dist');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(DIST_DIR));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const headers = { Authorization };
const config = { headers };

// returns all products
app.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', config)
    .then((result) => { res.send(result.data); })
    .catch(() => { res.sendStatus(500); });
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
      const firstStyle = res2.data.results[0];
      const thumbnail = firstStyle.photos[0].thumbnail_url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png';
      // 'https://st.depositphotos.com/11872014/54095/v/450/depositphotos_540957050-stock-illustration-photo-coming-soon-picture-frame.jpg'
      const tempObj = {
        ...res1.data,
        thumbnail,
        original_price: firstStyle.original_price,
        sale_price: firstStyle.sale_price,
        // sale_price: '100.00',
      };
      // res.send([res1.data, res2.data.results[0].photos[0].thumbnail_url]);
      res.send([tempObj]);
    }))
    .catch(() => res.sendStatus(500));
});

// returns all the styles available for the given product
app.get('/products/:id/styles', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}/styles`, config)
    .then((result) => { res.send(result.data); })
    .catch(() => { res.sendStatus(500); });
});

app.get('/reviews', (req, res) => {
  const reviewConfig = {
    params: req.query,
    headers,
  };
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', reviewConfig)
    .then((result) => { res.send(result.data); })
    .catch(() => { res.sendStatus(500); });
});

app.get('/reviews/meta/ratings', (req, res) => {
  const reviewConfig = {
    params: req.query,
    headers,
  };
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', reviewConfig)
    .then((result) => { res.send(result.data.ratings); })
    .catch(() => { res.sendStatus(500); });
});

app.get('/reviews/meta', (req, res) => {
  const reviewConfig = {
    params: req.query,
    headers,
  };
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', reviewConfig)
    .then((result) => { res.send(result.data); })
    .catch(() => { res.sendStatus(500); });
});

<<<<<<< HEAD
app.post('/reviews', (req, res) => {
  postConfig = {
    headers: {
      Authorization,
      'Content-Type': 'application/json'
    }
  }

  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', JSON.stringify(req.body), postConfig)
    .then((result) => {
      res.send(result.data);
    })
    .catch((error) => {res.sendStatus(500)});
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  console.log(req.params.review_id)
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.params.review_id}/helpful`, null, config)
  .then((result) => {
    res.send(result.data)
  })
  .catch((error) => {res.sendStatus(500)})
});
// app.get('/questions', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', params)
//     .then((result) => { res.send(result.data); });
// });
=======
// Questions / Answers
// get questions(productId)
app.get('/questions/:id', (req, res) => {
  const body = { product_id: Number(req.params.id), page: 1, count: 100 };
  // console.log('QA-localConfig', body);
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    headers: headers,
    params: body,
    method: 'GET',
  })
  // axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${req.params.id}&count=100`, config)
    .then((result) => { res.status(200).send(result.data); })
    .catch((err) => { console.log('server err: ', err); res.status(500).send(err); });
  // );
});

// get answers(questionId)
app.get('/answers/:id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/answers/?page=1&count=5`, config)
    .then((result) => { res.status(200).send(result.data); })
    .catch((err) => { res.status(500).send(err); });
});
//

// post question(productId)
app.post('/questions/:id', (req, res) => {
  const body = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: Number(req.params.id),
  };
  // console.log(body);
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    headers: headers,
    data: body,
    method: 'POST',
  })
    .then(() => { res.sendStatus(201); })
    .catch((err) => { console.log(err); res.status(500).send(err); });
});

// post answer(questionId)
app.post('/answers/:id', (req, res) => {
  const body = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
  };
  req.body.photos ? body.photos = req.body.photos : null;
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/answers`,
    headers: headers,
    data: body,
    method: 'POST',
  })
    .then(() => { res.sendStatus(201); })
    .catch((err) => { console.log(err); res.status(500).send(err); });
});

// put question as helpful(questionId)
app.put('/questions/:id/helpful', (req, res) => {
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/helpful`,
    headers: headers,
    method: 'PUT',
  })
    .then(() => { res.sendStatus(204); })
    .catch((err) => { res.status(500).send(err); });
});

// put report a question(questionId)
app.put('/questions/:id/report', (req, res) => {
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/report`,
    headers: headers,
    method: 'PUT',
  })
    .then(() => { res.sendStatus(204); })
    .catch((err) => { res.status(500).send(err); });
});

// put answer as helpful(answerId)
app.put('/answers/:id/helpful', (req, res) => {
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.params.id}/helpful`,
    headers: headers,
    method: 'PUT',
  })
    .then(() => { res.sendStatus(204); })
    .catch((err) => { res.status(500).send(err); });
});

// put report a answer(answerId)
app.put('/answers/:id/report', (req, res) => {
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.params.id}/report`,
    headers: headers,
    method: 'PUT',
  })
    .then(() => { res.sendStatus(204); })
    .catch((err) => { res.status(500).send(err); });
});
>>>>>>> main

// app.get('/user-cart', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', params)
//     .then((result) => { res.send(result.data); });
// });

app.listen(PORT, () => { console.log(`Listening to port ${PORT}`); });
