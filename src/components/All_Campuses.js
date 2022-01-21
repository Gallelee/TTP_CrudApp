import React from "react"

export default function All_Campuses(){

    //just one campus box for now

    return(
        <div>

            <div id="camp-top">
                <h1 id="campus-head"> All Campuses </h1>
                <button id="add-campus">Add Campus </button>
            </div>
            
            {/* for loop to be added here */}
            <div className="campus-box">
                <table>
                    <tr>
                        <td>
                            <img src="#" className="camp-img" />
                        </td>
                        <td>
                            <h3 className="camp-name"> Campus Name </h3>
                            <p className="camp-p">Num students </p>
                            <div>
                                <p className="camp-ed"><a href="#">Edit</a></p>
                                <button className="camp-del">Delete</button>
                            </div>
                        </td>
                    </tr>
                </table>
                
                

            </div>

        </div>
    )

}
