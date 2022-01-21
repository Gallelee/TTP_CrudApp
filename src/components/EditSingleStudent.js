import React from "react"

export default function EditSingleStudent(){

    return(
        <div id="stud-edit-form">
            <form>
                <input type="text" placeholder="Student Name"/>
                <input type="number" step="0.1" min="0" max="4" placeholder="GPA"/>
                <input type="text" placeholder="Student Url"/>
            </form>

        </div>
    )
}