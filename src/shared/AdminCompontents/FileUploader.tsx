import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'


interface IFileUploader{
    files: File[],
    addFiles: (f:File[])=>void
}
export const FileUploader = (props: IFileUploader): any => {


    const onDrop = useCallback((acceptedFiles: File[]) => {

        props.addFiles([...acceptedFiles]);
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      const loadingFiles = props.files.map((file, index): React.JSX.Element => <li key={index}>{file.name}</li>)
      return (<>
                <div className='drop-files__area mb-3'{...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
                </div>

                
                {props.files.length > 0 && (
                    <>
                        <button onClick={()=>{props.addFiles([])}} className='mb-3'>Удалить файлы</button>
                        <div>Загруженные файлы</div>
                        <ul>
                            {loadingFiles}
                        </ul>
                    </>
                    )}
        
            </>
      )
}

