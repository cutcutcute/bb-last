import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

export const FileUploader = (): any => {

    const [files, setFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      const loadingFiles = files.map((file, index): React.JSX.Element => <li key={index}>{file.name}</li>)
      return (<>
                <div className='drop-files__area mb-3'{...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
                </div>

                
                {files.length > 0 && (
                    <>
                        <button onClick={()=>{setFiles([])}} className='mb-3'>Удалить файлы</button>
                        <div>Загруженные файлы</div>
                        <ul>
                            {loadingFiles}
                        </ul>
                    </>
                    )}
        
            </>
      )
}

