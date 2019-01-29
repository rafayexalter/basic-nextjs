import { Container } from 'reactstrap'
import propTypes from 'prop-types';

const BasePage = ({ children, className }) => {
    return (
        <div className={`base-page ${className}`}>
            <Container>
                { children }
            </Container>
        </div>
    )
}

BasePage.defaultProps = {
    className: ''
}

BasePage.propTypes = {
    className: propTypes.any.isRequired
}

export default BasePage;