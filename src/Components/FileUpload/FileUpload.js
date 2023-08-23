import "./FileUpload.css"
const FileUpload=()=>{
    return(
        <div className="DropDown">
                        <span style={{fontSize:"16px"}}>File Upload</span><span style={{color:"#D93025",marginLeft:"5px"}}>*</span>
<br/>
<br/>
<br/>
          <input type="file" name="file" id="file" class="inputfile" />
<label for="file"><i class='bx bx-upload' style={{marginRight:"5px",fontSize:"16px"}}></i>Add File</label>

        </div>
    )
}
export default FileUpload;