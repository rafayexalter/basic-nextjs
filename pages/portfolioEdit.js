import Layout from '../components/shared/Layout';
import BasePage from '../components/shared/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import { Row, Col} from 'reactstrap';

import { updatePortfolio, getPortfolioById } from '../actions';

import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';

class PortfolioEdit extends React.Component {

    static async getInitialProps({ query }) {

        let portfolio = {};

        try {
            portfolio = await getPortfolioById(query.id);

        } catch(error) {
            console.error(error);
        }

        console.log(portfolio);
        return {portfolio};

    }

    constructor(props) {
        super();

        this.state = {
            error: undefined
        }

        this.updatePortfolio = this.updatePortfolio.bind(this);
    }

    updatePortfolio(portfolioData, {setSubmitting}) {

        setSubmitting(true);

        updatePortfolio(portfolioData)
        .then((portfolio) => {
            setSubmitting(false);
            this.setState({ error: undefined });
            Router.pushRoute('/portfolios');
        })
        .catch((err) => { 
            const error = err.message || 'Server Error!';
            setSubmitting(false);
            this.setState({ error });
        })
    }

    render() {
        const { error } = this.state;
        const { portfolio } = this.props;

        return (
            <Layout {...this.props.auth}>
                <BasePage class="portfolio-create-page" title="Update Portfolio">
                <Row>
                    <Col md="6">
                        <PortfolioCreateForm 
                        initialValues={portfolio} 
                        error={error} 
                        onSubmit={this.savePortfolio} />
                    </Col>
                </Row>
                </BasePage>
            </Layout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioEdit);