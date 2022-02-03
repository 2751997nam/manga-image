const express = require('express');
const router = express.Router();
const DownloadImageController = require('./controllers/DownloadImageController');

router.get('/', function (req, res) {
    return res.json({message: 'manga image service'});
})
 
router.post('/download', DownloadImageController.download.bind(DownloadImageController));

module.exports = router;