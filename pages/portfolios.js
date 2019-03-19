import Layout from '../components/shared/Layout';
import BasePage from '../components/shared/BasePage';
import { Link } from '../routes';
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

import { getPortfolios } from '../actions';

class Portfolios extends React.Component {

    static async getInitialProps() {

        let portfolios = [];

        try {
            portfolios = await getPortfolios();

        } catch(err) {
            console.error(err);
        }

        return {portfolios};
    }

    renderPortfolios(portfolios) {
        return portfolios.map( (portfolio, index) => {
            return (
                <Col md="4" key={index}>
                    <React.Fragment>
                        <span>
                          <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                            <CardBody>
                              <p className="portfolio-card-city">{portfolio.location}</p>
                              <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                              <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                              <div className="readMore"> </div>
                            </CardBody>
                          </Card>
                        </span>
                    </React.Fragment>
                </Col>
            )
        } )
    }

    render() {
        const { portfolios } = this.props;

        return(
            <Layout {...this.props.auth}>
                <BasePage className="portfolio-page" title="Portfolio Page">
                <Row>
                    { this.renderPortfolios(portfolios) }
                </Row>
                </BasePage>
            </Layout>
        )
    }
    
}

export default Portfolios