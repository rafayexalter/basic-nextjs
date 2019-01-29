import Layout from '../components/shared/Layout';
import BasePage from '../components/shared/BasePage';
import axios from 'axios';
import { Link } from '../routes';


class Portfolios extends React.Component {

    static async getInitialProps() {

        let posts = [];

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;

        } catch (err) {
            console.error(err);
        }
        
        return  { posts: posts.splice( 0, 10 ) };
    }

    renderPosts(posts) {
        return posts.map( (post, index) => {
            return (
                <li key={index}>
                    <Link route={`/portfolio/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            )
        } )
    }

    render() {
        const { posts } = this.props;

        return(
            <Layout title="Portfolio">
                <BasePage>
                <h1>Portfolio Page</h1>
                <ul>
                    { this.renderPosts(posts) }
                </ul>
                </BasePage>
            </Layout>
        )
    }
    
}

export default Portfolios