import React from "react"

export default function EditCampus(){
    return(
        <div id="campus-form">
                <h1>Edit Campus</h1>
                <form>
                    <label>Campus Name</label>
                    <input type={"text"}/>
                    <label>Campus Location</label>
                    <input type={"text"}/> 
                    <label>Campus Image Url</label>
                    <input type={"text"}/>
                    <label>Campus Description</label>
                    <input type={"text"}/>
                    <input type={"submit"}/>
                </form>
        </div>
    )
}