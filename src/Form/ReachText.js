import React, {PureComponent} from 'react';
import scriptjs  from 'scriptjs'
import CKEditor  from 'react-ckeditor-wrapper'

class ReachText extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ckeditorReady: false
    }
  }
  componentDidMount() {
    const self = this;
    window.CKEDITOR_BASEPATH = 'https://cdn.ckeditor.com/4.6.2/standard/';
    scriptjs('https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js', () => {
      self.setState({
        ckeditorReady: true
      })
    })
  }

  render() {
    const { content, handleEditorChange } = this.props

    if (this.state.ckeditorReady) {
      return (<CKEditor
        value={content}
        config={{
          language: 'he',
          toolbar: [
            { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
            { name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'] },
            { name: 'editing', items: ['Scayt'] }
          ]
        }}
        onChange={handleEditorChange } />)
    }

    return null
  }
}

export default ReachText;
