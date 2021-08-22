
import "./Header.css"
const Header = (props) =>{
    return (
        <div className="Header">
            <div className="Header-item">{props.sub.namee}</div>
            <div className="Header-item">{props.sub.price}</div>
            <div className="Header-item">{props.sub.amount}</div>
            <div className="Header-item">{props.sub.unit}</div>
            <div className="Header-item">{props.sub.date}</div>
        </div>
    )
}
export default Header