import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dhqf8ggpf"
const CLOUDINARY_UPLOAD_PRESET = "rflz2mlw"

export const AddPhoto = ({ viewId, setUploadedFile }) => {
    const uploadHandler = async e => {
        


        // const fileName = `userimg-${viewId._id}-${Date.now()}`
        // console.log(fileName)
        // const fileBlob = new Blob(document.getElementsByName("addPhoto")[0].files)
        // const fd = new FormData()
        // fd.append('files', fileBlob, fileName);
        // console.log(fd)
        // await axios.post('/images/upload', fd)
        //     .then(res => {
        //         console.log(res.data)
        //     })
        //     .catch(err => console.log(err))
    }
    return(
        <form id="upload1">
            <div className="inner_btn">
                <label for="file-input">
                    <FontAwesomeIcon icon="plus-circle" class="inner_btn-icon" />
                </label>
                <input id="file-input" name="addPhoto" type="file" onChange={e => setUploadedFile(e.target.files[0])} />
            </div>
            <div className="inner_btn" onClick={e => {
                e.preventDefault()
                uploadHandler()
            }}>
                <label for="file-input">
                    <FontAwesomeIcon icon="cloud-upload-alt" class="inner_btn-icon" />
                </label>
                <button id="file-input" type="submit" name="test" value="Submit" />
            </div>
        </form>
    )
}