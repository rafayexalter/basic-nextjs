import React, { Component } from 'react';
import Layout from '../components/shared/Layout';
import axios from 'axios';

class Index extends Component {

    static async getInitialProps() {

        let userData;

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;

        } catch (err) {
            console.error(err);
        }
        
        return  { userData };
    }

    render() {
        const { userData } = this.props;

        return(
            <Layout title="Index">
                <h1>Front Page</h1>
                <code>
                    { userData.title }
                </code>
            </Layout>
        )
    }
    
}

export default Index