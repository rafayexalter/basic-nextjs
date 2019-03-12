import { withRouter } from 'next/router';
import Layout from '../components/shared/Layout';
import axios from 'axios';

class Portfolio extends React.Component {

    static async getInitialProps({ query }) {
        const postId = query.id;
        let post = [];
        
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            post = response.data;

        } catch( err ) {
            console.error(err);
        }

        return { post };
    }

    render() {
        const { post } = this.props;

        return (
        <Layout {...this.props.auth}>
            <p>Post ID: { post.id }</p>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
        </Layout>
        )
    }
}

export default withRouter(Portfolio)