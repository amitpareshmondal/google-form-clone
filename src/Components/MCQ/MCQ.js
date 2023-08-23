import "./MCQ.css"
const MCQ=()=>{
    return(
        <div className="MCQ" style={{ height:'auto'}}>
            <span style={{fontSize:"16px"}}>MCQ</span><span style={{color:"#D93025",marginLeft:"5px"}}>*</span>
            <br/>
            <br/>
            
          <input type="radio" id="opt1" name="option" value="option 1" style={{transform:"scale(1.8)",marginRight:"10px",marginBottom:"20px"}}/>
          <label for="opt1" style={{marginBottom:"20px"}}>Option 1</label><br/>

          <input type="radio" id="opt1" name="option" value="option 1" style={{transform:"scale(1.8)",marginRight:"10px",marginBottom:"20px"}}/>
          <label for="opt1" style={{marginBottom:"20px"}}>Option 2</label><br/>
          <input type="radio" id="opt1" name="option" value="option 1" style={{transform:"scale(1.8)",marginRight:"10px"}}/>
          <label for="opt1" >Option 3</label>
        </div>
    )
}
export default MCQ;