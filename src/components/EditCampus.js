import React from "react"

export default function EditCampus(){
    return(
        <div id="campus-form">
                <h1>Edit Campus</h1>
                <form>
                    <label className="camp-lbl">Campus Name</label>
                    <input type={"text"} className="camp-inpt"/>
                    <br />
                    <label className="camp-lbl">Campus Location</label>
                    <input type={"text"} className="camp-inpt"/> 
                    <br />
                    <label className="camp-lbl">Campus Image Url</label>
                    <input type={"text"} className="camp-inpt"/>
                    <br />
                    <label className="camp-lbl">Campus Description</label>
                    <input type={"text"} className="camp-inpt"/>
                    <br />
                    <input type={"submit"}/>
                </form>
        </div>
    )
}