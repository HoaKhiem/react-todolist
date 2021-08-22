import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expense.css"
import Card from '../Card'
import Header from './Header'
import Form from '../form/Form'
import "./ExpenseItem.css"
import ExpenseList from './ExpenseList'
import Chart from '../Chart/Chart'
import Filter from './Filter'
let Data = [0,0,0,0,0,0,0];
const Expense = (props) =>{

    let key = Math.random()*20;

    let dayy = -1;
    const [day, setday] = useState(Data);
    const [chartData, setChartData] = useState(Data);
    const filteredYear = props.item.filter(expense =>{
        const d = new Date(expense.date);
        return d.getDay() == day;
    })
    const filterResult = (val) =>{
        setday(val);
    }
    const saveDataHander = (data) => {
        const d = new Date(data.date);
        dayy = d.getDay();
        console.log(dayy);
        Data[dayy-1] +=1;
        console.log(Data);
        setChartData(Data);
        const expenseData = {
            ...data,
            id: Math.round(Math.random()*100000)
        }
        props.addData(expenseData);
    }
    return(
        <div>
            <Card className="expense">
                <Form saveData = {saveDataHander}/>
            </Card>
            <Card className='expense'>
                <Filter filterChange = {filterResult}/>
                <Header sub = {props.sub[0]}/>
                <ExpenseList item = {filteredYear}/>
            </Card>
            <Card className="expense">
                <Chart data = {chartData}/>
            </Card>
        </div>
    )
}
export default Expense