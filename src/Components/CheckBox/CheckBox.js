
const CheckBox=()=>{
    return(
        <div className="MCQ" style={{ height:'200px'}}>
            <span style={{fontSize:"16px"}}>CheckBox</span><span style={{color:"#D93025",marginLeft:"5px"}}>*</span>
            <br/>
            <br/>
            
            <input type="checkbox" id="option1" name="opt1" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
            <label for="option1" style={{marginBottom:"15px"}}> Option 1</label><br/>
            <br/>
            <input type="checkbox" id="option1" name="opt1" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
            <label for="option1" style={{marginBottom:"5px"}}> Option 2</label><br/>
            <br/>
            <input type="checkbox" id="option1" name="opt1" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
            <label for="option1" style={{marginBottom:"5px"}}> Option 3</label><br/>
        </div>
    )
}
export default CheckBox;