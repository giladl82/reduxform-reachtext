import React from 'react';
import { Field, reduxForm } from 'redux-form'

import ReachText from './ReachText';

import './Form.css';

class Form extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleEditorChange = this.handleEditorChange.bind(this)

    this.state = {
      content: ''
    }
  }

  handleEditorChange(e) {
    this.props.change('content', e)
    this.setState({
      content: e
    })
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props

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
            <label>Content
              <Field
                ref={input => this.reachText = input}
                name="content"
                component="input"
                type="hidden"
                />
              <ReachText
                content={this.state.content}
                handleEditorChange={this.handleEditorChange} />
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
