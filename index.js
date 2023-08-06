require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => res.status(200).send({
  status: true,
  message: 'Api is working',
}));

app.use('/api', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
