import React, {useState} from 'react'
import "./Form.css"

const Form = (props) =>{
    const [namee, setName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('')
    const onNameChange = (event) =>{
        setName(event.target.value);
    }
    const onPriceChange = (event) =>{
        setPrice(event.target.value);
    }
    const onAmountChange = (event) =>{
        setAmount(event.target.value);
    }
    const onUnitChange = (event) =>{
        setUnit(event.target.value);
    }
    const onDateChange = (event) =>{
        setDate(event.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        const inputResult = {
            namee: namee,
            price: price,
            amount: amount,
            unit: unit,
            date: date
        }
        props.saveData(inputResult);
        setName('');
        setAmount('');
        setPrice('');
        setUnit('');
        setDate('')
    }
    return(
        <form onSubmit = {submitHandler} className="form">
            <input value={namee} type="text" onChange = {onNameChange} placeholder="Tên nhiệm vụ"></input>
            <input value={price} type="number" min="0" onChange ={onPriceChange} max="500000" placeholder="Giá bán"></input>
            <input value={amount} type="number" min="1"  max="30" onChange = {onAmountChange}  placeholder="Số lượng cần mua"></input>
            <input value={unit} type="text" onChange = {onUnitChange} placeholder="Đơn vị"></input>
            <input type = "date" placeholder="chọn ngày" onChange={onDateChange}></input>
            <div className="form-button">
                <button type="submit">Thêm</button>
            </div>
        </form>
    )
}
export default Form
