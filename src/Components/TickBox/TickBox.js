import "./TickBox.css";
const TickBox=()=>{
    return (
        <div className="TickBox">
  <span style={{fontSize:"16px"}}>Tick box Grid</span><span style={{color:"#D93025",marginLeft:"5px"}}>*</span>
            <br/>
            <br/>
            <div className="Col">
                <span>Option 1</span>
                <span>Option 2</span>
                <span>Option 3</span>
            </div>
            <div className="Row">
                <div className="Row1">
              
                <div className="Buttons">
                <span style={{marginRight:"205px"}}>Row 1</span>
                <input type="checkbox" id="option1" name="opt3" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
          
            <input type="checkbox" id="option1" name="opt3" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
            
            <input type="checkbox" id="option1" name="opt3" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
         
                </div>
                
                <div className="Buttons">
                <span style={{marginRight:"205px"}}>Row 2</span>
                <input type="checkbox" id="option1" name="opt1" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
          
            <input type="checkbox" id="option1" name="opt1" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
            
            <input type="checkbox" id="option1" name="opt1" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
                </div>
                
                <div className="Buttons">
                <span style={{marginRight:"205px"}}>Row 3</span>
                <input type="checkbox" id="option1" name="opt2" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
          
            <input type="checkbox" id="option1" name="opt2" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
            
            <input type="checkbox" id="option1" name="opt2" value="option 1" style={{transform:"scale(1.8)",border:"none",marginBottom:"5px",accentColor:"#613CB0"}}/>
                </div>
                
                </div>
            </div>
        </div>
    )
}
export default TickBox;