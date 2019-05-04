import React from 'react';
import { Button, Alert } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PortfolioInput from '../form/PortfolioInput';
import PortfolioDate from '../form/PortfolioDate';
import moment from 'moment';

const validateInputs = (values) => {
    let errors = {};

    Object.entries(values).forEach(( [ key, value ] ) => {
        if( ! values[key] && key !== 'endDate' ) {
            errors[key] = `${key} is required.`
        }
    });

    const startDate = moment(values.startDate);
    const endDate = moment(values.endDate);

    if( startDate && endDate && endDate.isBefore(startDate) ) {
        errors.endDate = 'End Date cannot be before start date.';
    }

    return errors;
}



const PortfolioCreateForm = ({initialValues, onSubmit, error}) => (
    <div>
        <Formik
            initialValues={initialValues}
            validate={validateInputs}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    
                <Field 
                    type="text" 
                    id="title" 
                    name="title" 
                    label="Title"
                    component={PortfolioInput} />

                <Field 
                    type="text" 
                    id="company" 
                    name="company" 
                    label="Company"
                    component={PortfolioInput} />

                <Field 
                    type="text" 
                    id="location" 
                    name="location" 
                    label="Location"
                    component={PortfolioInput} />

                <Field 
                    type="text" 
                    id="position" 
                    name="position" 
                    label="Position"
                    component={PortfolioInput} />

                <Field 
                    type="textarea" 
                    id="description" 
                    name="description" 
                    label="Description"
                    component={PortfolioInput} />

                <Field 
                    id="startDate" 
                    name="startDate" 
                    label="Start Date"
                    initialDate={initialValues.startDate}
                    component={PortfolioDate} />

                <Field 
                    id="endDate" 
                    name="endDate" 
                    label="End Date"
                    initialDate={initialValues.endDate}
                    canBeDisabled={true}
                    component={PortfolioDate} />

                <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
                    Create
                </Button>

                { error && 
                    <Alert color="danger">
                        {error}
                    </Alert>
                }

                </Form>
            )}
        </Formik>
        
    </div>
);

export default PortfolioCreateForm;


/*
import React from 'react';

export default class PortfolioCreateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: '', description: '', language: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        this.setState({[field]: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.title);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <Label>
                    Name:
                    <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
                </Label>

                <Label>
                    Description:
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </Label>

                <Label>
                    Pick your favorite Programming Language:
                    <select name="language" value={this.state.language} onChange={this.handleChange}>
                        <option value="javascript">Javascript</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="php">PHP</option>
                    </select>
                </Label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}*/