import './App.css';
import React, {useState} from 'react'
import Expense from "../src/components/list/Expense"
function App() {
  const sub = [
    {
      namee: "Tên",
      price: "Giá bán",
      amount: "Số lượng",
      unit: "Đơn vị",
      date:"Thời gian",
      id: Math.round(Math.random()*1000)
    }
  ]
  const dataa = [
    // {
    //   namee: "trứng gà",
    //   price: 3500,
    //   amount: 30,
    //   unit: "quả",
    //   id: Math.round(Math.random()*1000)
    // },
    // {
    //   namee: "Rau muống",
    //   price: 5000,
    //   amount: 2,
    //   unit: "bó",
    //   id: Math.round(Math.random()*1000)
    // },
    // {
    //   namee: "Mì tôm",
    //   price: 90,
    //   amount: 1,
    //   unit: "Thùng",
    //   id: Math.round(Math.random()*1000)
    // },
    // {
    //   namee: "Cá ngừ",
    //   price: 3500,
    //   amount: 30,
    //   unit: "con",
    //   id: Math.round(Math.random()*1000)
    // }
  ]
  const [dataSaved, setData] = useState(dataa);
  const onAddData = data =>{
    setData((PreviousData) =>{
     return [data, ...PreviousData]
    })
  }
  const empty = dataa.length;
  return (
    <div className="App">
      <p>Thời gian biểu</p>
      <Expense empty = {empty} addData = {onAddData} sub = {sub} item = {dataSaved}/>
    </div>
  );
}

export default App;
