import React from "react";

import './Table.css'
function Table(props){
    return(
        <div className="list-items">
            <div >
                {props.user.name}
            </div>
            <div >
                {props.user.username}
            </div>
            <div >
                {props.user.email}
            </div>
        </div>
    )
}

export default Table;