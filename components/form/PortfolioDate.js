import React from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label, Button } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

export default class PortfolioDate extends React.Component {
  constructor(props) {
    super(props);

    const dateValue = props.initialDate ? props.initialDate : new Date();

    this.state = {
      dateValue: dateValue,
      isHidden: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }

  handleChange(date) {

    this.setState({
        dateValue: date
    });

    this.setFieldValueAndTouched(date, true);
  }

    componentDidMount () {
        this.setState({isBrowserLoaded: true})
    }

    toggleDate(date) {

        this.setState({
            isHidden: !this.state.isHidden
        });

        this.setFieldValueAndTouched(date, true);
    }

  render() {
    const {isBrowserLoaded} = this.state;
    const { canBeDisabled, label, id, field, form: { touched, errors } } = this.props;
    const { isHidden, dateValue } = this.state;

    return (
        <React.Fragment>
            <FormGroup>
                <Label htmlFor={id}>{label}</Label>
                { !isHidden && 
                    <div className="input-group">
                    { isBrowserLoaded && <DatePicker
                        selected={dateValue}
                        onChange={this.handleChange}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        maxDate={new Date()}
                        dropdownMode="select"
                        id={id}
                    />
                    }
                    </div>
                }

                { canBeDisabled && ! isHidden && <Button onClick={() => this.toggleDate()}>Still Working Here...</Button> }

                { canBeDisabled && isHidden && 
                <React.Fragment>
                    <span>Still Working Here</span>
                    <Button onClick={() => this.toggleDate(dateValue)}>Set End Date</Button>
                </React.Fragment>
                }

                {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
            </FormGroup>
        </React.Fragment>
    );
  }
}