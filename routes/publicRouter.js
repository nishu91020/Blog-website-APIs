const express = require('express');
const router = express.Router();

router.use(authenticate);

module.export = router;
