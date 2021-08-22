import React from 'react'
import "./ExpenseItem.css"
const ExpenseItem = (props) =>{
    return(
        <div className = "expensive-item">
            <div className="expensive-name">{props.namee}</div>
            <div className="expensive-name">{props.price}</div>
            <div className="expensive-name">{props.amount}</div>
            <div className="expensive-name">{props.unit}</div>
            <div className="expensive-name">{props.date}</div>
        </div>
    )
}
export default ExpenseItem;