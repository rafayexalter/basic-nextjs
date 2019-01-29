import Layout from '../components/shared/Layout';
import BasePage from '../components/shared/BasePage';

import auth0Client from "../services/auth0";
import { withRouter } from 'next/router';


class Callback extends React.Component {

    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
    }

    render() {
        return (
            <Layout>
                <BasePage>
                    <h1>Verifying</h1>
                </BasePage>
            </Layout>
        )
    }
}

export default withRouter(Callback)