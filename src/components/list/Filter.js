import react from "react";
import './Filter.css'
const Filter = (props) =>{
    const onSelectChange = (event) =>{
        const val = event.target.value;
        props.filterChange(val);
    }
    return(
        <div className="filter">
            <div className="filter-select-wrap">
                <select onChange = {onSelectChange} className="filter-select">
                    <option className="op" value="1">Thứ hai</option>
                    <option className="op" value="2">Thứ ba</option>
                    <option className="op" value="3">Thứ tư</option>
                    <option className="op" value="4">Thứ năm</option>
                    <option className="op" value="5">Thứ sáu</option>
                    <option className="op" value="6">Thứ bảy</option>
                    <option className="op" value="0">Chủ nhật</option>
                </select>
            </div>
    </div>
    )
}
export default Filter;