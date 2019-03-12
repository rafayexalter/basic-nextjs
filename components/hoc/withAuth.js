import React from "react";
import Layout from '../shared/Layout';
import BasePage from '../shared/BasePage';

const namespace = 'http://localhost:8080/';

export default role => Component =>
        class withAuth extends React.Component {

            static async getInitialProps(args) {
                const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

                return { ...pageProps };
            }

            renderProtectedPage() {
                const { isAuthenticated, user } = this.props.auth;
                const userRole = user && user[`${namespace}role`];
                let isAuthorized = false;

                if(role) {
                    if(userRole && userRole === role) { isAuthorized = true }
                } else {
                    isAuthorized = true;
                }

                if( ! isAuthenticated ) {
                    return (
                        <Layout {...this.props.auth}>
                            <BasePage>
                                <p>You're not authenticated, please login.</p>
                            </BasePage>
                        </Layout>
                    )
                } else if (! isAuthorized) {
                    return (
                        <Layout {...this.props.auth}>
                            <BasePage>
                                <p>You're not authorized, you do not have permission.</p>
                            </BasePage>
                        </Layout>
                    )
                } else {
                    return ( <Component {...this.props} /> )
                }

            }

            render() {
                return this.renderProtectedPage();
            }
        }