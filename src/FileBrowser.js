import React from 'react'
import Files from 'react-files'
const FileBrowser = () => {
  const onFilesChange = (files) => {
    console.log(files)
  }

  const onFilesError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  }

  return (

    <div className="container justify-content text-center bg-light my-5">
      <div className="col-md-12">
        <Files
          className='files-dropzone'
          onChange={onFilesChange}
          onError={onFilesError}
          multiple
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          <button>Click to open File Browser</button>
          <h3 className="my-5">This utility helps navigate the local disk folders</h3>
          <h3>You can also drag and drop files from windows file browser into this window and vice-versa</h3>
        </Files>
      </div>
    </div>
  )
  // }
}

export default FileBrowser