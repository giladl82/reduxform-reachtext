import React from 'react';
import TinyMCE from 'react-tinymce';


const ReachText = (props) => {
  const { content, handleEditorChange } = props
  return (
    <TinyMCE
      name="story"
      content={content}
      config={{
        menubar: false,
        // plugins: 'link image code',
        toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright | code',
        statusbar: false
      }}
      onChange={handleEditorChange}
      />
  )
}

export default ReachText;
