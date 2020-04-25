import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const TakePhoto = ({viewId, setWebCamOpen, setUploadedFile}) => {
    const uploadHandler = async e => {

        const fileName = `userimg-${viewId._id}-${Date.now()}`
        console.log(fileName)
        const fileBlob = new Blob(document.getElementsByName("addPhoto")[0].files)
        const fd = new FormData()
        fd.append('files', fileBlob, fileName);
        console.log(fd)
        await axios.post('/images/upload', fd)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    
    return(
        <form onSubmit={uploadHandler} id="upload2">
            <div className="inner_btn" onClick={e => {
            e.preventDefault()
            setWebCamOpen(true);
            }}>
                <label for="file-input">
                    <FontAwesomeIcon icon="plus-circle" class="inner_btn-icon" />
                </label>
                <input id="file-input" type="file" />
            </div>
            <div className="inner_btn">
                <label for="file-input">
                    <FontAwesomeIcon icon="cloud-upload-alt" class="inner_btn-icon" />
                </label>
                <button id="file-input" type="submit" />
            </div>
        </form>
    )
}