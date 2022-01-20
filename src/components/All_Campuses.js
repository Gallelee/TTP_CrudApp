import React from "react"
import Navbar from "./Navbar"

export default function All_Campuses(){

    //just one campus box for now

    return(
        <div>

            <Navbar />
            <div id="camp-top">
                <h1 id="campus-head"> All Campuses </h1>
                <button id="add-campus">Add Campus </button>
            </div>
            
            <div class="campus-box">
                <img src="#" className="camp-img" />
                <h3 className="camp-name"> Campus Name </h3>
                <p className="camp-p">Num students </p>

            </div>

        </div>
    )

}
