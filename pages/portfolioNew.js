import Layout from '../components/shared/Layout';
import BasePage from '../components/shared/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import { Row, Col } from 'reactstrap';

import withAuth from '../components/hoc/withAuth';

class PortfolioNew extends React.Component {

    constructor(props) {
        super();

        this.savePortfolio = this.savePortfolio.bind(this);
    }

    savePortfolio(portfolioDate) {
        alert(JSON.stringify(portfolioDate, null, 2));
    }

    render() {
        return (
            <Layout {...this.props.auth}>
                <BasePage class="portfolio-create-page" title="Create New Portfolio">
                <Row>
                    <Col md="6">
                        <PortfolioCreateForm onSubmit={this.savePortfolio} />
                    </Col>
                </Row>
                </BasePage>
            </Layout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioNew);