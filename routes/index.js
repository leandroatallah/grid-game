const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('board', {title: 'Grid Game'})
})

module.exports = router