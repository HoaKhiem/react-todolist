import react from "react";
import "./ExpenseItem.css"
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) =>{
    let display = props.item.map(expense => <ExpenseItem date={expense.date} namee = {expense.namee} key ={expense.id} price ={expense.price} amount = {expense.amount} unit={expense.unit}/>);
    if(props.item.length <= 0){
        return(
            <p className = "p">Chưa có nhiệm vụ cho hôm nay</p>
        )

    }else{
        return(
            display
        )
    }
}

export default ExpenseList