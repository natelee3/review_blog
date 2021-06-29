'use strict';

const express = require('express');
const UsersModel = require('../models/Users');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get('/signup', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Signup',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partial-signup',
            head: 'partial-head',
            nav: 'partial-nav',
        }
    })
});

router.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Login',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partial-login',
            head: 'partial-head',
            nav: 'partial-nav'
        }
    })
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/')
});

router.post('/signup', async (req, res) => {
    const {user_name, user_email, user_password} = req.body
    const salt = bcrypt.genSaltSync(); //default 10 rounds
    const hash = bcrypt.hashSync(user_password,salt);
    const response = await UsersModel.addUser(user_name, user_email, hash);
    console.log(response)
    //If successful, send user to login page. If not, send error
    if (!!response.id) {
        res.redirect('/users/login')
    } else {
        res.status(500).send('ERROR: Please try again.')
    };
});

router.post('/login', async (req, res) => {
    const {user_email, user_password} = req.body;
    const user = new UsersModel(null, null, user_email, user_password)
    const response = await user.login()
    
    if (!!response.isValid) {
        const {isValid, user_id, name, email} = response;

        req.session.is_logged_in = isValid;
        req.session.user_id = user_id;
        req.session.name = name;
        req.session.email = email;
        console.log(req.session)
        res.redirect('/')
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;