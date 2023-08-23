import "./DropDown.css"
const DropDown=()=>{
    return(
        <div className="DropDown">
            <span>Drop down</span> <span style={{color:"#D93025",marginLeft:"5px"}}>*</span>
            <br/>
            <select name="cars" id="cars" style={{height:"50px",width:"150px",marginLeft:"20px",marginTop:'14px',border:"0.3px solid #F1F0E8",fontSize:"16px",paddingLeft:"15px",paddingRight:"15px",color:"grey"}}>
            <option value="" disabled selected>Choose</option>
  <option value="volvo">Option 1</option>
  <option value="saab">option 1</option>
  <option value="mercedes">option 1</option>
  <option value="audi">option 1</option>
</select>
        </div>
    )
}
export default DropDown;