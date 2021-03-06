const express = require('express');
const next = require('next');
const routes = require('../routes');
const mongoose = require('mongoose');

// Services
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const config = require('./config');

const Book = require('./models/book');
const bodyParser = require('body-parser');

const bookRoutes = require('./routes/book');
const portfolioRoutes = require('./routes/portfolio');

const secretData = [
    {
        title: 'Secret Data 1',
        description: 'Plans how to build spaceship'
    },
    {
        title: 'Secret Data 2',
        description: 'My secret passwords'
    }
];
// password: yeDlf2vERCNC2x4B
mongoose.connect(config.DB_URI, { useNewUrlParser: true })
    .then(() => console.log('Database Connected'))
    .catch(err => console.error(err));

//async () => ( await mongoose.connect(config.DB_URI, { useNewUrlParser: true })) ();

app.prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.json());

        server.use('/api/v1/books', bookRoutes);
        server.use('/api/v1/portfolios', portfolioRoutes);

        server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
            return res.json(secretData);
        });

        server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
            return res.json(secretData);
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        });


        server.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
                res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized Access'});
            }
        });

        server.use(handle).listen(8080, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:8080')
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });