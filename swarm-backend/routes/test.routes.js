const { Router } = require('express');
const router = Router();
const test = require('../helpers/storageHelpers.js');

router.post('/new', (req, res) => {
  test
    .testSqlite(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ msg: error });
    });
});

router.get('/all', (req, res) => {
  test
    .GetInfo()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ msg: error });
    });
});

module.exports = router;
