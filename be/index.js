const express = require('express');
const reversePN = require('./reverse_PN/reverse');

const app = express();
const reverse = reversePN('string');
app.use(express.json());

app.post('/reverse', (req, res) => {
  if (!req.body.revervse) {
    res.status(500).json({ error: 'set revervse input' });
  } else {
    const result = reverse(req.body.revervse);

    if (Number.isNaN(result)) {
      res.status(500).json({ error: 'incorrect input' });
    } else {
      res.status(200).json({ result });
    }
  }
});

app.listen(8001, () => console.log(`Example app listening on port ${8001}!`));
