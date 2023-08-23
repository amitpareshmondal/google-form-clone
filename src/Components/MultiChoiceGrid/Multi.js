import "./Multi.css";
const Muti=()=>{
    return(
        <div className="Multi">
  <span style={{fontSize:"16px"}}>Multi Choice Grid</span><span style={{color:"#D93025",marginLeft:"5px"}}>*</span>
            <br/>
            <br/>
            <div className="Col">
                <span>Option 1</span>
                <span>Option 2</span>
                <span>Option 3</span>
            </div>
            <br/>
            <div className="Row">
                <div className="Row1">
              
                <div className="Buttons">
                <span style={{marginRight:"205px"}}>Row 1</span>
                <input type="radio" id="opt1" name="option1" value="option 1" style={{transform:"scale(1.8)"}}/>
          <input type="radio" id="opt1" name="option1" value="option 1" style={{transform:"scale(1.8)"}}/>
          <input type="radio" id="opt1" name="option1" value="option 1" style={{transform:"scale(1.8)"}}/>
                </div>
                
                <div className="Buttons">
                <span style={{marginRight:"205px"}}>Row 2</span>
                <input type="radio" id="opt1" name="option2" value="option 1" style={{transform:"scale(1.8)"}}/>
          <input type="radio" id="opt1" name="option2" value="option 1" style={{transform:"scale(1.8)"}}/>
          <input type="radio" id="opt1" name="option2" value="option 1" style={{transform:"scale(1.8)"}}/>
                </div>
                
                <div className="Buttons">
                <span style={{marginRight:"205px"}}>Row 3</span>
                <input type="radio" id="opt1" name="option3" value="option 1" style={{transform:"scale(1.8)"}}/>
          <input type="radio" id="opt1" name="option3" value="option 1" style={{transform:"scale(1.8)"}}/>
          <input type="radio" id="opt1" name="option3" value="option 1" style={{transform:"scale(1.8)"}}/>
                </div>
                
                </div>
            </div>
        </div>
    )
}
export default Muti;