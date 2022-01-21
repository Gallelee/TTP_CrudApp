import React from "react"

export default function AddStudentForm(){

    return(
        <div id="add-stu-form">
            <form>
                <label>Student Name</label>
                <input type="text"/>
                <input type="submit" value="Add Student"/>
            </form>

        </div>
    )
}