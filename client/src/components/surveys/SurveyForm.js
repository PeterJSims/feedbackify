import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
	{ label: 'Survey Title', name: 'title', errorMessage: 'Please provide a title for your survey' },
	{ label: 'Email Subject Line', name: 'subject', errorMessage: 'Please provide an email subject line' },
	{ label: 'Email Body', name: 'body', errorMessage: 'Please provide body text for your email' },
	{ label: 'Recipient List', name: 'emails', errorMessage: 'Please provide a list of email recipients ' }
];

class SurveyForm extends Component {
	renderFields() {
		return FIELDS.map(({ label, name }) => (
			<Field key={name} component={SurveyField} type="text" label={label} name={name} />
		));
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button className="teal btn-flat right white-text" type="submit">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}
function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.emails || '');

	FIELDS.forEach(({ name, errorMessage }) => {
		if (!values[name]) {
			errors[name] = errorMessage;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm'
})(SurveyForm);
