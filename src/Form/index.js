import React from 'react';
import { Field, reduxForm } from 'redux-form'

import ReachText from './ReachText';

import './Form.css';

class Form extends React.PureComponent {
  render() {
    const { handleSubmit, pristine, change, submitting } = this.props

    const handleEditorChange = (e) => {
      change('content',  e.target.getContent())
    }

    return (
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <div className="form__field">
            <label>Title
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Story Title"
                />
            </label>
          </div>
          <div className="form__field">
            <label>Title
              <Field
                ref={input => this.reachText = input}
                name="content"
                component="input"
                type="hidden"
                />
              <ReachText handleEditorChange={handleEditorChange} />
            </label>
          </div>
          <div className="buttons__container">
            <button type="submit" disabled={pristine || submitting}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
export default reduxForm({
  form: 'demoForm', // a unique identifier for this form
})(Form);
