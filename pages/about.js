import Layout from '../components/shared/Layout';
import BasePage from '../components/shared/BasePage';

class About extends React.Component {
    render() {
        return (
            <Layout {...this.props.auth}>
                <BasePage class="about-page" title="About Page">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aliquam a, similique exercitationem quidem, beatae expedita reprehenderit ad maxime magnam, ex illo numquam asperiores eveniet quia. Modi dolorum dicta deleniti?</p>
                </BasePage>
            </Layout>
        )
    }
}

export default About