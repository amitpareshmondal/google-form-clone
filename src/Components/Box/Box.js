import React from "react";
import "./Box.css"
const Box=()=>{
    return(
        <div className="Box">
            <div className="Box-Top"></div>
            <div className="Box-Middle">
            <h1 style={{fontWeight:"lighter", fontSize:"32px"}}>Assignment Task</h1>
            </div>
            <hr style={{border:"none",height:"0.3px",color:"#B2B2B2",backgroundColor:"#D8D9DA"}}/>
           <div className="Box-Detail">
            <div className="Box-Detail-Right">
            <span className="Email-Text">abcd325@gmail.com </span>  <span className="Switch-Text">Switch account</span>
            </div>
         <div>
         <i class='bx bx-badge-check' style={{fontSize:"14px"}} ></i>

            <span style={{color:"#73777B" , fontWeight:"400",fontSize:"14px",marginLeft:"5px"}}>
            Draft Saved
            </span>
          
         </div>
     
           </div>
           <br/>
           <div className="Box-Photo">
           <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>

           </div>
           <hr style={{border:"none",height:"0.3px",color:"#B2B2B2",backgroundColor:"#D8D9DA"}}/>
<div className="required" style={{marginBottom:"8px"}}>
* Indicates required question
</div>

        </div>
    )
}
export default Box;