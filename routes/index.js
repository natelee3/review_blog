'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Good Mallets'
        },
        partials: {
            body: 'partial-index',
            head: 'partial-head',
            nav: 'partial-nav'
        }
    })
});

module.exports = router;
