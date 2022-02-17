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

const headers = { Authorization };
const config = { headers };

// returns all products
app.get('/products', (req, res) => {
  console.log('server GET ALL: ', );
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', config)
    .then((result) => { console.log('server GET ALL: ', result.data); res.send(result.data); })
    .catch(() => { res.sendStatus(500); });
});

// returns product level information for a specific product id
app.get('/products/:id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}`, config)
    .then((result) => { res.send(result.data); })
    .catch(() => { res.sendStatus(500); });
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

// Questions / Answers
// get questions(productId)
app.get('/questions/:id', (req, res) => {
  const localConfig = { headers };
  localConfig.params = { product_id: req.params.id, page: 1, count: 5 };
  console.log('QA-localConfig', localConfig);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', localConfig)
    .then((result) => { console.log('server GET ALL Qs: ', result.data); res.status(200).send(result.data); })
    .catch((err) => { res.status(500).send(err); });
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
  const data = {
    product_id: req.params.id,
    body: req.body.id,
    name: req.body.name,
    email: req.body.email,
  };
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    headers: headers,
    data: data,
    method: 'POST',
  })
    .then(() => { res.sendStatus(201); })
    .catch((err) => { res.status(500).send(err); });
});

// post answer(questionId)
app.post('/answers/:id', (req, res) => {
  const data = {
    question_id: req.params.id,
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
  };
  req.body.photos ? data.photos = req.body.photos : null;
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/answers`,
    headers: headers,
    data: data,
    method: 'POST',
  })
    .then(() => { res.sendStatus(201); })
    .catch((err) => { console.log(err); res.status(500).send(err); });
});

//
// put question as helpful(questionId)
app.put('/questions/:id/helpful', (req, res) => {
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/helpful`,
    headers: headers,
    method: 'PUT',
  })
    .then(() => { res.sendStatus(204); })
    .catch((err) => { console.log(err); res.status(500).send(err); });
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

// app.get('/user-cart', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', params)
//     .then((result) => { res.send(result.data); });
// });

app.listen(PORT, () => { console.log(`Listening to port ${PORT}`); });
