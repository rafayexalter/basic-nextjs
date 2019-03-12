const Portfolio = require('../models/portfolio');

exports.getPortfolios = (req, res) => {

    Portfolio.find({}, (err, allPorfolios) => {
        if(err) {
            return res.status(422).send(err);
        } 

        return res.json(allPorfolios);
    })
};

exports.savePortfolio = (req, res) => {
    const portfolioData = req.body;
    const userId = req.user.sub;

    const portfolio = new Portfolio(portfolioData);
    portfolio.userId = userId;

    portfolio.save((err, createdPortfolio) => {
        if(err) {
            return res.status(422).send(err);
        } 

        return res.json(createdPortfolio);
    })
};