import "./LinearScale.css";
const LinearScale=()=>{
    return(
        <div className="LinearScale">
             <span style={{fontSize:"16px"}}>Linear Scale</span><span style={{color:"#D93025",marginLeft:"5px"}}>*</span>
            <br/>
            <br/>
            <div className="Linear-Items">
        <div className="LinearNumbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
        </div>
        <br/>
        <div className="Linear-Row">
       <span>Worst</span>
          
        <input type="radio" id="opt1" name="option12" value="option 1" style={{transform:"scale(1.8)"}}/>
       

          <input type="radio" id="opt1" name="option12" value="option 1" style={{transform:"scale(1.8)"}}/>
         
          <input type="radio" id="opt1" name="option12" value="option 1" style={{transform:"scale(1.8)"}}/>
          <input type="radio" id="opt1" name="option12" value="option 1" style={{transform:"scale(1.8)"}}/>
          <input type="radio" id="opt1" name="option12" value="option 1" style={{transform:"scale(1.8)"}}/>
          <span>Best</span>
        </div>
        </div>
        </div>
    )
}
export default LinearScale;