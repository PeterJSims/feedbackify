//For each label and text input
import React from 'react';

const SurveyField = ({ input }) => {
	return (
		<div>
			<input {...input} />
		</div>
	);
};

export default SurveyField;
